import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ImageFile extends File {
  id: string;
  preview: string;
}

interface ImagePreviewProps {
  files: ImageFile[];
  onRemoveFile: (id: string) => void;
  onReorderFiles: (files: ImageFile[]) => void;
}

export default function ImagePreview({ files, onRemoveFile, onReorderFiles }: ImagePreviewProps) {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = useCallback((e: React.DragEvent, fileId: string) => {
    setDraggedItem(fileId);
    e.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    
    if (!draggedItem || draggedItem === targetId) {
      setDraggedItem(null);
      return;
    }

    const draggedIndex = files.findIndex(f => f.id === draggedItem);
    const targetIndex = files.findIndex(f => f.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) {
      setDraggedItem(null);
      return;
    }

    const newFiles = [...files];
    const [draggedFile] = newFiles.splice(draggedIndex, 1);
    newFiles.splice(targetIndex, 0, draggedFile);

    onReorderFiles(newFiles);
    setDraggedItem(null);
  }, [files, draggedItem, onReorderFiles]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" data-testid="image-preview-container">
      {files.map((file) => (
        <div
          key={file.id}
          draggable
          onDragStart={(e) => handleDragStart(e, file.id)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, file.id)}
          className={`relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-move ${
            draggedItem === file.id ? 'opacity-50' : ''
          }`}
          data-testid={`image-preview-${file.id}`}
        >
          <img 
            src={file.preview} 
            alt={file.name}
            className="w-full h-40 object-cover"
            data-testid={`img-preview-${file.id}`}
          />
          <Button
            size="sm"
            variant="destructive"
            className="absolute top-2 right-2 w-7 h-7 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFile(file.id);
            }}
            data-testid={`button-remove-${file.id}`}
          >
            <X className="w-3 h-3" />
          </Button>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2">
            <span className="truncate block" data-testid={`text-filename-${file.id}`}>
              {file.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}