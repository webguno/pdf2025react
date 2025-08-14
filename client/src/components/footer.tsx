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
            'key': '4ff1b29ea326de1791c3e290a78f4e8c',
            'format': 'iframe',
            'height': 50,
            'width': 320,
            'params': {}
          };
        `;
        document.body.appendChild(script);

        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = '//www.highperformanceformat.com/4ff1b29ea326de1791c3e290a78f4e8c/invoke.js';
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
        {/* ... rest of your footer content remains exactly the same ... */}
      </footer>

      {/* Sticky Mobile Ad Banner */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 w-full h-[50px] bg-gray-100 dark:bg-gray-800 z-50 flex items-center justify-center border-t border-gray-200 dark:border-gray-700">
        <div id="container-4ff1b29ea326de1791c3e290a78f4e8c" style={{ width: '320px', height: '50px' }}>
          {/* Ad will be injected here */}
        </div>
      </div>
    </>
  );
}
