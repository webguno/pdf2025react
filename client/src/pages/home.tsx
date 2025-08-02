import { Card } from "@/components/ui/card";
import ImageConverter from "@/components/image-converter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CloudUpload, Images, Settings, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Transform Images into
            <br />
            Professional PDFs
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Convert multiple images to a single PDF file with advanced customization options. 
            Fast, secure, and completely client-side processing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% Private & Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <CloudUpload className="w-4 h-4 text-blue-500" />
              <span>No File Upload Required</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Images className="w-4 h-4 text-purple-500" />
              <span>Multiple Formats Supported</span>
            </div>
          </div>
        </section>

        {/* Main Converter */}
        <section id="converter">
          <ImageConverter />
        </section>

        {/* Feature Highlights */}
        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Why Choose Our PDF Converter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 bg-white dark:bg-card border-gray-200 dark:border-border">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CloudUpload className="text-primary text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Drag & Drop</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Easy file upload with drag and drop support</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 bg-white dark:bg-card border-gray-200 dark:border-border">
            <div className="w-12 h-12 bg-[hsl(188,90%,65%)]/10 dark:bg-[hsl(188,90%,65%)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Images className="text-[hsl(188,90%,65%)] text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Multiple Formats</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Support for JPG, PNG, WebP, and more</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 bg-white dark:bg-card border-gray-200 dark:border-border">
            <div className="w-12 h-12 bg-[hsl(34,96%,55%)]/10 dark:bg-[hsl(34,96%,55%)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="text-[hsl(34,96%,55%)] text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Advanced Options</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Customize page size, margins, and quality</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 bg-white dark:bg-card border-gray-200 dark:border-border">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-primary text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Client-Side</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">No upload to servers, all processing local</p>
          </Card>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
        <Card className="p-6 md:p-8 mb-8 bg-white dark:bg-card border-gray-200 dark:border-border">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <details className="group">
                <summary className="w-full text-left flex items-center justify-between py-2 font-semibold text-gray-800 dark:text-gray-200 hover:text-primary transition-colors duration-200 cursor-pointer">
                  <span>What image formats are supported?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
                </summary>
                <div className="mt-2 text-gray-600 dark:text-gray-400">
                  <p>We support all major image formats including JPG, PNG, WebP, GIF, BMP, and TIFF. The converter automatically handles format conversion during the PDF creation process.</p>
                </div>
              </details>
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <details className="group">
                <summary className="w-full text-left flex items-center justify-between py-2 font-semibold text-gray-800 dark:text-gray-200 hover:text-primary transition-colors duration-200 cursor-pointer">
                  <span>Is there a limit on file size or number of images?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
                </summary>
                <div className="mt-2 text-gray-600 dark:text-gray-400">
                  <p>Since all processing happens in your browser, the limits depend on your device's memory. Generally, we recommend keeping individual images under 10MB and total batch under 100MB for optimal performance.</p>
                </div>
              </details>
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <details className="group">
                <summary className="w-full text-left flex items-center justify-between py-2 font-semibold text-gray-800 dark:text-gray-200 hover:text-primary transition-colors duration-200 cursor-pointer">
                  <span>Are my images uploaded to any server?</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
                </summary>
                <div className="mt-2 text-gray-600 dark:text-gray-400">
                  <p>No! All processing happens entirely in your browser using JavaScript. Your images never leave your device, ensuring complete privacy and security.</p>
                </div>
              </details>
            </div>
          </div>
        </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}
