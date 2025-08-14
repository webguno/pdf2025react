import { useEffect, useRef } from 'react'

export default function MobileAdBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadAdsterraAd = () => {
      if (adContainerRef.current && typeof window !== 'undefined') {
        // Clear any existing content
        adContainerRef.current.innerHTML = ''
        
        // Create the configuration script
        const configScript = document.createElement('script')
        configScript.type = 'text/javascript'
        configScript.text = `
          atOptions = {
            'key' : 'd4d308f2a53445a6d7e007c52c1c0561',
            'format' : 'iframe',
            'height' : 50,
            'width' : 320,
            'params' : {}
          };
        `
        
        // Create the ad loader script
        const adScript = document.createElement('script')
        adScript.type = 'text/javascript'
        adScript.src = '//www.highperformanceformat.com/d4d308f2a53445a6d7e007c52c1c0561/invoke.js'
        adScript.async = true
        
        // Append both scripts to the container
        adContainerRef.current.appendChild(configScript)
        adContainerRef.current.appendChild(adScript)
      }
    }

    loadAdsterraAd()

    // Cleanup function to remove ad when component unmounts
    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = ''
      }
    }
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-900 border-t border-border shadow-lg">
      <div className="flex justify-center items-center py-2">
        <div 
          ref={adContainerRef}
          className="w-80 h-12 max-w-80"
          data-testid="mobile-ad-container"
          style={{ width: '320px', height: '50px' }}
        >
          {/* Loading fallback */}
          <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center text-xs text-gray-500 border">
            <span>Loading ad...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
