import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Trash2, FileImage, Download, AlertCircle, CheckCircle } from "lucide-react";
import { useImageConverter } from "@/hooks/use-image-converter";
import DropZone from "@/components/drop-zone";
import ConversionOptions from "@/components/conversion-options";
import ImagePreview from "@/components/image-preview";

export default function ImageConverter() {
  const {
    selectedFiles,
    isConverting,
    conversionProgress,
    progressText,
    statusMessage,
    conversionOptions,
    setConversionOptions,
    addFiles,
    removeFile,
    clearAllFiles,
    reorderFiles,
    convertToPDF,
    downloadPDF,
    generatedPdfBlob,
    formatFileSize,
    getTotalSize
  } = useImageConverter();

  return (
    <Card className="p-6 md:p-8 mb-8 bg-white dark:bg-card border-gray-200 dark:border-border">
      {/* Drop Zone */}
      <DropZone onFilesAdded={addFiles} />

      {/* Conversion Options */}
      <ConversionOptions
        options={conversionOptions}
        onOptionsChange={setConversionOptions}
      />

      {/* Progress Bar */}
      {isConverting && (
        <div className="mb-6" data-testid="progress-container">
          <Progress value={conversionProgress} className="w-full mb-2" />
          <p className="text-sm text-gray-600 text-center" data-testid="progress-text">
            {progressText}
          </p>
        </div>
      )}

      {/* Image Preview Section */}
      {selectedFiles.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Selected Images</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400" data-testid="file-info">
              <span data-testid="file-count">{selectedFiles.length} images selected</span> | 
              <span data-testid="total-size" className="ml-1">{formatFileSize(getTotalSize())}</span>
            </div>
          </div>

          <ImagePreview
            files={selectedFiles}
            onRemoveFile={removeFile}
            onReorderFiles={reorderFiles}
          />
        </div>
      )}

      {/* Status Message */}
      {statusMessage && (
        <Alert className={`mb-6 ${statusMessage.type === 'success' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`} data-testid="status-message">
          {statusMessage.type === 'success' ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <AlertDescription className={statusMessage.type === 'success' ? 'text-green-800' : 'text-red-800'}>
            {statusMessage.message}
          </AlertDescription>
        </Alert>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        {selectedFiles.length > 0 && (
          <Button
            variant="destructive"
            onClick={clearAllFiles}
            disabled={isConverting}
            className="px-8 py-3 rounded-full font-semibold transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            data-testid="button-clear-all"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        )}
        
        {selectedFiles.length > 0 && !generatedPdfBlob && (
          <Button
            onClick={convertToPDF}
            disabled={isConverting}
            className="px-8 py-3 rounded-full font-semibold transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-[hsl(240,90%,65%)] hover:bg-[hsl(244,86%,51%)]"
            data-testid="button-convert-pdf"
          >
            {isConverting ? (
              <>
                <div className="loading-spinner w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                Processing...
              </>
            ) : (
              <>
                <FileImage className="w-4 h-4 mr-2" />
                Convert to PDF
              </>
            )}
          </Button>
        )}
        
        {generatedPdfBlob && (
          <Button
            onClick={downloadPDF}
            className="px-8 py-3 rounded-full font-semibold transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-[hsl(188,90%,65%)] hover:bg-[hsl(188,80%,55%)]"
            data-testid="button-download-pdf"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        )}
      </div>
    </Card>
  );
}
