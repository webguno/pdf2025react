import { useEffect, useState } from "react";

export default function AdBanner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      return mobile;
    };

    const loadAd = () => {
      // Clean up existing ads first
      document.querySelectorAll('.adsterra-script').forEach(el => el.remove());
      document.getElementById('adsterra-iframe')?.remove();

      if (checkMobile()) {
        const container = document.getElementById('adsterra-container');
        if (!container) return;

        const iframe = document.createElement('iframe');
        iframe.id = 'adsterra-iframe';
        iframe.style.width = '320px';
        iframe.style.height = '50px';
        iframe.style.border = 'none';
        iframe.style.overflow = 'hidden';
        iframe.scrolling = 'no';
        iframe.src = `https://www.highperformanceformat.com/4ff1b29ea326de1791c3e290a78f4e8c/invoke.html`;

        const script = document.createElement('script');
        script.className = 'adsterra-script';
        script.innerHTML = `
          window.atOptions = {
            key: '4ff1b29ea326de1791c3e290a78f4e8c',
            format: 'iframe',
            height: 50,
            width: 320,
            params: {}
          };
        `;
        
        document.body.appendChild(script);
        container.appendChild(iframe);
      }
    };

    // Initial load
    loadAd();

    // Handle resize with debounce
    const debouncedResize = debounce(loadAd, 300);
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      document.querySelectorAll('.adsterra-script').forEach(el => el.remove());
      document.getElementById('adsterra-iframe')?.remove();
    };
  }, []);

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-100 dark:bg-gray-800 py-2 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-center">
        <div 
          id="adsterra-container"
          className="w-[320px] h-[50px] flex items-center justify-center bg-white dark:bg-gray-900 rounded shadow"
        >
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Loading advertisement...
          </span>
        </div>
      </div>
    </div>
  );
}
