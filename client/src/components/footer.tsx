import { Heart, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      return mobile;
    };

    const handleResize = () => {
      const shouldLoadAd = checkMobile();
      
      // Always clean up existing ads first
      const existingScripts = document.querySelectorAll('script[src*="highperformanceformat"], script[innerHTML*="atOptions"]');
      existingScripts.forEach(script => script.remove());
      
      // Remove any existing iframes
      const existingIframes = document.querySelectorAll('iframe[id*="4ff1b29ea326de1791c3e290a78f4e8c"]');
      existingIframes.forEach(iframe => iframe.remove());

      if (shouldLoadAd) {
        console.log('Loading Adsterra mobile ad...');
        
        // Create options script
        const configScript = document.createElement('script');
        configScript.type = 'text/javascript';
        configScript.innerHTML = `
          atOptions = {
            'key': '4ff1b29ea326de1791c3e290a78f4e8c',
            'format': 'iframe',
            'height': 50,
            'width': 320,
            'params': {}
          };
        `;
        document.body.appendChild(configScript);

        // Create loader script
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = '//www.highperformanceformat.com/4ff1b29ea326de1791c3e290a78f4e8c/invoke.js';
        invokeScript.async = true;
        invokeScript.onerror = () => console.error('Failed to load Adsterra script');
        document.body.appendChild(invokeScript);
      }
    };

    // Initial check
    handleResize();
    
    // Add debounced resize listener
    const debouncedResize = debounce(handleResize, 200);
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      const scripts = document.querySelectorAll('script[src*="highperformanceformat"], script[innerHTML*="atOptions"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  // Simple debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  return (
    <>
      <footer className="border-t bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm mt-16 border-gray-200 dark:border-gray-800 pb-[60px] md:pb-0">
        {/* Your existing footer content remains unchanged */}
      </footer>

      {/* Sticky Mobile Ad Banner */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 w-full h-[50px] bg-gray-100 dark:bg-gray-800 z-50 flex items-center justify-center border-t border-gray-200 dark:border-gray-700">
          <div 
            id="container-4ff1b29ea326de1791c3e290a78f4e8c" 
            style={{ width: '320px', height: '50px' }}
            className="flex items-center justify-center"
          >
            {!window.atOptions && (
              <span className="text-xs text-gray-500">Loading ad...</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}
