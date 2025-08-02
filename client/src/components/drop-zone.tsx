import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { CloudUpload } from "lucide-react";

interface DropZoneProps {
  onFilesAdded: (files: File[]) => void;
}

export default function DropZone({ onFilesAdded }: DropZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter(
      file => file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      onFilesAdded(files);
    }
  }, [onFilesAdded]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(
      file => file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      onFilesAdded(files);
    }
    
    // Reset input value to allow selecting the same files again
    e.target.value = '';
  }, [onFilesAdded]);

  const handleBrowseClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = (e) => handleFileSelect(e as any);
    input.click();
  }, [handleFileSelect]);

  return (
    <div
      className={`border-3 border-dashed rounded-xl p-8 md:p-12 text-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 mb-6 cursor-pointer ${
        isDragOver ? 'drag-over' : 'border-gray-300 dark:border-gray-600'
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={handleBrowseClick}
      data-testid="drop-zone"
    >
      <CloudUpload className="w-12 h-12 text-primary mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Drag & Drop Your Images Here</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">or click to browse files</p>
      <Button
        variant="outline"
        className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-full transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        data-testid="button-select-images"
      >
        Select Images
      </Button>
    </div>
  );
}