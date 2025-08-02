import { PDFDocument, rgb } from 'pdf-lib';

export interface ConversionOptions {
  pageSize: string;
  orientation: string;
  imageFit: string;
  margins: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  quality: number;
  pdfTitle: string;
}

interface PageDimensions {
  width: number;
  height: number;
}

const PAGE_SIZES: Record<string, PageDimensions> = {
  A4: { width: 595.28, height: 841.89 },
  Letter: { width: 612, height: 792 },
  Legal: { width: 612, height: 1008 },
  A3: { width: 841.89, height: 1190.55 },
  A5: { width: 420.94, height: 595.28 }
};

interface ImageFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  preview: string;
}

export async function convertImagesToPDF(
  imageFiles: ImageFile[],
  options: ConversionOptions,
  onProgress: (progress: number, currentFile: string) => void
): Promise<Uint8Array> {
  console.log('Starting PDF conversion with files:', imageFiles.length);
  console.log('Conversion options:', options);
  
  const pdfDoc = await PDFDocument.create();
  
  // Set PDF metadata
  if (options.pdfTitle) {
    pdfDoc.setTitle(options.pdfTitle);
  }
  pdfDoc.setCreator('Image to PDF Converter');
  pdfDoc.setCreationDate(new Date());
  
  console.log('PDF document created, processing images...');

  for (let i = 0; i < imageFiles.length; i++) {
    const imageFile = imageFiles[i];
    const file = imageFile.file;
    onProgress(Math.round(((i + 1) / imageFiles.length) * 100), imageFile.name);

    try {
      console.log(`Processing image: ${imageFile.name}, type: ${imageFile.type}, size: ${imageFile.size}`);
      console.log('File object:', file);
      
      // Read file as array buffer
      const imageBytes = await readFileAsArrayBuffer(file);
      console.log(`Image bytes loaded: ${imageBytes.byteLength} bytes`);
      
      // Embed image based on type
      let image;
      if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
        image = await pdfDoc.embedJpg(imageBytes);
      } else if (file.type === 'image/png') {
        image = await pdfDoc.embedPng(imageBytes);
      } else {
        // Convert other formats to JPEG first
        const convertedImageBytes = await convertImageToJpeg(file, options.quality);
        image = await pdfDoc.embedJpg(convertedImageBytes);
      }

      // Calculate page dimensions
      const pageDimensions = calculatePageDimensions(
        options.pageSize,
        options.orientation,
        image.width,
        image.height
      );

      // Create page
      const page = pdfDoc.addPage([pageDimensions.width, pageDimensions.height]);

      // Calculate image dimensions and position
      const { imageWidth, imageHeight, x, y } = calculateImageDimensions(
        image,
        pageDimensions,
        options
      );

      // Draw image
      console.log(`Drawing image at position (${x}, ${y}) with size ${imageWidth}x${imageHeight}`);
      page.drawImage(image, {
        x,
        y,
        width: imageWidth,
        height: imageHeight,
        opacity: 1,
      });
      
      console.log(`Successfully added image ${imageFile.name} to PDF`);

    } catch (error) {
      console.error(`Error processing image ${imageFile.name}:`, error);
      // Continue with next image
    }
  }

  const pageCount = pdfDoc.getPageCount();
  console.log(`PDF generation complete. Total pages: ${pageCount}`);
  
  if (pageCount === 0) {
    console.error('No pages were added to the PDF!');
    throw new Error('Failed to add any images to the PDF');
  }

  const pdfBytes = await pdfDoc.save();
  console.log(`PDF saved, size: ${pdfBytes.length} bytes`);
  
  return pdfBytes;
}

function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function convertImageToJpeg(file: File, quality: number): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result as ArrayBuffer);
              reader.onerror = reject;
              reader.readAsArrayBuffer(blob);
            } else {
              reject(new Error('Failed to convert image to JPEG'));
            }
          },
          'image/jpeg',
          quality / 100
        );
      } else {
        reject(new Error('Failed to get canvas context'));
      }
    };

    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

function calculatePageDimensions(
  pageSize: string,
  orientation: string,
  imageWidth: number,
  imageHeight: number
): PageDimensions {
  let dimensions = PAGE_SIZES[pageSize] || PAGE_SIZES.A4;

  // Handle orientation
  let isLandscape = false;
  if (orientation === 'auto') {
    isLandscape = imageWidth > imageHeight;
  } else if (orientation === 'landscape') {
    isLandscape = true;
  }

  if (isLandscape) {
    return { width: dimensions.height, height: dimensions.width };
  }

  return dimensions;
}

function calculateImageDimensions(
  image: any,
  pageDimensions: PageDimensions,
  options: ConversionOptions
) {
  // Convert margins from mm to points (1mm = 2.83465 points)
  const marginTop = options.margins.top * 2.83465;
  const marginBottom = options.margins.bottom * 2.83465;
  const marginLeft = options.margins.left * 2.83465;
  const marginRight = options.margins.right * 2.83465;

  const contentWidth = pageDimensions.width - marginLeft - marginRight;
  const contentHeight = pageDimensions.height - marginTop - marginBottom;

  let imageWidth: number;
  let imageHeight: number;

  switch (options.imageFit) {
    case 'fill':
      // Fill the content area (may crop image)
      imageWidth = contentWidth;
      imageHeight = contentHeight;
      break;
    case 'stretch':
      // Stretch to fit (may distort)
      imageWidth = contentWidth;
      imageHeight = contentHeight;
      break;
    case 'fit':
    default:
      // Fit within content area (maintain aspect ratio)
      const scale = Math.min(
        contentWidth / image.width,
        contentHeight / image.height
      );
      imageWidth = image.width * scale;
      imageHeight = image.height * scale;
      break;
  }

  // Center the image within the content area
  const x = marginLeft + (contentWidth - imageWidth) / 2;
  const y = marginBottom + (contentHeight - imageHeight) / 2;

  return { imageWidth, imageHeight, x, y };
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
