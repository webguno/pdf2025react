import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { convertImagesToPDF, downloadBlob, type ConversionOptions } from '@/lib/pdf-utils';

interface ImageFile extends File {
  id: string;
  preview: string;
}

interface StatusMessage {
  type: 'success' | 'error';
  message: string;
}

export function useImageConverter() {
  const [selectedFiles, setSelectedFiles] = useState<ImageFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [progressText, setProgressText] = useState('');
  const [statusMessage, setStatusMessage] = useState<StatusMessage | null>(null);
  const [generatedPdfBlob, setGeneratedPdfBlob] = useState<Blob | null>(null);
  const { toast } = useToast();

  const [conversionOptions, setConversionOptions] = useState<ConversionOptions>({
    pageSize: 'A4',
    orientation: 'portrait',
    imageFit: 'fit',
    margins: {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10
    },
    quality: 85,
    pdfTitle: ''
  });

  const addFiles = useCallback((files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      setStatusMessage({
        type: 'error',
        message: 'Please select only image files (JPG, PNG, WebP, etc.)'
      });
      return;
    }

    const newImageFiles: ImageFile[] = imageFiles.map(file => ({
      ...file,
      id: `${file.name}-${Date.now()}-${Math.random()}`,
      preview: URL.createObjectURL(file)
    }));

    setSelectedFiles(prev => [...prev, ...newImageFiles]);
    setStatusMessage(null);
    setGeneratedPdfBlob(null);

    toast({
      title: "Images Added",
      description: `Added ${imageFiles.length} image(s) for conversion.`,
    });
  }, [toast]);

  const removeFile = useCallback((fileId: string) => {
    setSelectedFiles(prev => {
      const fileToRemove = prev.find(f => f.id === fileId);
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter(f => f.id !== fileId);
    });
    setGeneratedPdfBlob(null);
  }, []);

  const clearAllFiles = useCallback(() => {
    selectedFiles.forEach(file => {
      URL.revokeObjectURL(file.preview);
    });
    setSelectedFiles([]);
    setStatusMessage(null);
    setGeneratedPdfBlob(null);
    setConversionProgress(0);
    setProgressText('');
  }, [selectedFiles]);

  const reorderFiles = useCallback((newFiles: ImageFile[]) => {
    setSelectedFiles(newFiles);
    setGeneratedPdfBlob(null);
  }, []);

  const convertToPDF = useCallback(async () => {
    if (selectedFiles.length === 0) {
      setStatusMessage({
        type: 'error',
        message: 'Please add at least one image to convert.'
      });
      return;
    }

    setIsConverting(true);
    setConversionProgress(0);
    setStatusMessage(null);
    setGeneratedPdfBlob(null);

    try {
      const pdfBytes = await convertImagesToPDF(
        selectedFiles,
        conversionOptions,
        (progress, currentFile) => {
          setConversionProgress(progress);
          setProgressText(`Converting: ${currentFile} (${progress}%)`);
        }
      );

      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      setGeneratedPdfBlob(blob);
      
      setStatusMessage({
        type: 'success',
        message: 'PDF created successfully! Click download to save.'
      });

      toast({
        title: "Conversion Complete",
        description: "Your PDF has been generated successfully.",
      });

    } catch (error) {
      console.error('Conversion error:', error);
      setStatusMessage({
        type: 'error',
        message: 'An error occurred during conversion. Please try again.'
      });

      toast({
        title: "Conversion Failed",
        description: "An error occurred while creating the PDF.",
        variant: "destructive",
      });
    } finally {
      setIsConverting(false);
      setProgressText('');
    }
  }, [selectedFiles, conversionOptions, toast]);

  const downloadPDF = useCallback(() => {
    if (!generatedPdfBlob) return;

    const filename = conversionOptions.pdfTitle 
      ? `${conversionOptions.pdfTitle}.pdf`
      : `converted-images-${new Date().toISOString().split('T')[0]}.pdf`;

    downloadBlob(generatedPdfBlob, filename);

    toast({
      title: "Download Started",
      description: `Downloading ${filename}`,
    });
  }, [generatedPdfBlob, conversionOptions.pdfTitle, toast]);

  const formatFileSize = useCallback((bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }, []);

  const getTotalSize = useCallback((): number => {
    return selectedFiles.reduce((total, file) => total + file.size, 0);
  }, [selectedFiles]);

  return {
    selectedFiles,
    isConverting,
    conversionProgress,
    progressText,
    statusMessage,
    conversionOptions,
    generatedPdfBlob,
    setConversionOptions,
    addFiles,
    removeFile,
    clearAllFiles,
    reorderFiles,
    convertToPDF,
    downloadPDF,
    formatFileSize,
    getTotalSize
  };
}
