import { Heart, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Only load the ad script on mobile devices
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Remove any existing ad scripts first
        const existingScripts = document.querySelectorAll('script[src*="highperformanceformat"]');
        existingScripts.forEach(script => script.remove());

        // Create and inject the ad script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
          atOptions = {
            'key': 'd4d308f2a53445a6d7e007c52c1c0561',
            'format': 'iframe',
            'height': 50,
            'width': 320,
            'params': {}
          };
        `;
        document.body.appendChild(script);

        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = '//www.highperformanceformat.com/d4d308f2a53445a6d7e007c52c1c0561/invoke.js';
        document.body.appendChild(invokeScript);
      }
    };

    // Check on initial load
    handleResize();

    // Add resize listener to handle screen size changes
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <footer className="border-t bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm mt-16 border-gray-200 dark:border-gray-800 pb-[60px] md:pb-0">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="12" y="8" width="40" height="48" rx="4" fill="url(#docGradient)" stroke="currentColor" strokeWidth="2"/>
                  <path d="M44 8L44 16L52 16L44 8Z" fill="url(#cornerGradient)" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <rect x="18" y="20" width="24" height="2" rx="1" fill="currentColor" opacity="0.6"/>
                  <rect x="18" y="26" width="20" height="2" rx="1" fill="currentColor" opacity="0.6"/>
                  <rect x="18" y="32" width="26" height="2" rx="1" fill="currentColor" opacity="0.6"/>
                  <rect x="20" y="44" width="16" height="12" rx="2" fill="url(#imageGradient)" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="24" cy="48" r="1.5" fill="currentColor" opacity="0.7"/>
                  <path d="M20 52L24 48L28 52L32 48L36 52V54C36 55.1 35.1 56 34 56H22C20.9 56 20 55.1 20 54V52Z" fill="currentColor" opacity="0.7"/>
                  <defs>
                    <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(240, 90%, 98%)"/>
                      <stop offset="100%" stopColor="hsl(240, 90%, 95%)"/>
                    </linearGradient>
                    <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(240, 90%, 90%)"/>
                      <stop offset="100%" stopColor="hsl(240, 90%, 85%)"/>
                    </linearGradient>
                    <linearGradient id="imageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(188, 90%, 75%)"/>
                      <stop offset="100%" stopColor="hsl(188, 90%, 65%)"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-xl font-bold gradient-text">PDF Converter</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 max-w-md">
                Transform your images into professional PDF documents with our secure, client-side converter. 
                No uploads, complete privacy, and advanced customization options.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Made By</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>WEBGUNO</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>Drag & Drop Upload</li>
                <li>Multiple Image Formats</li>
                <li>Custom Page Sizes</li>
                <li>Quality Control</li>
                <li>Batch Processing</li>
                <li>Mobile Responsive</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <a href="#faq" className="hover:text-primary transition-colors duration-200">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="mailto:support@pdfconverter.com" className="hover:text-primary transition-colors duration-200">
                    Contact Support
                  </a>
                </li>
                <li>
                  <Link 
                    href="/privacy-policy" 
                    className="hover:text-primary transition-colors duration-200"
                    data-testid="link-privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms-conditions" 
                    className="hover:text-primary transition-colors duration-200"
                    data-testid="link-terms-conditions"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600 dark:text-gray-400">
               App By WEBGUNO
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-9 h-9 rounded-full p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-testid="social-github"
                >
                  <Github className="w-4 h-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-9 h-9 rounded-full p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-4 h-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-9 h-9 rounded-full p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-testid="social-email"
                >
                  <Mail className="w-4 h-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Ad Banner */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 w-full h-[50px] bg-gray-100 dark:bg-gray-800 z-50 flex items-center justify-center border-t border-gray-200 dark:border-gray-700">
        <div id="container-d4d308f2a53445a6d7e007c52c1c0561" style={{ width: '320px', height: '50px' }}>
          {/* Ad will be injected here */}
        </div>
      </div>
    </>
  );
}
