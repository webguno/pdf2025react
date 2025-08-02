import { FileImage, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./theme-toggle";

// SVG Logo Component
function PdfLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Document background */}
      <rect
        x="12"
        y="8"
        width="40"
        height="48"
        rx="4"
        fill="url(#docGradient)"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Folded corner */}
      <path
        d="M44 8L44 16L52 16L44 8Z"
        fill="url(#cornerGradient)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      
      {/* PDF text lines */}
      <rect x="18" y="20" width="24" height="2" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="18" y="26" width="20" height="2" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="18" y="32" width="26" height="2" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="18" y="38" width="18" height="2" rx="1" fill="currentColor" opacity="0.6" />
      
      {/* Image icon overlay */}
      <rect
        x="20"
        y="44"
        width="16"
        height="12"
        rx="2"
        fill="url(#imageGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="48" r="1.5" fill="currentColor" opacity="0.7" />
      <path
        d="M20 52L24 48L28 52L32 48L36 52V54C36 55.1 35.1 56 34 56H22C20.9 56 20 55.1 20 54V52Z"
        fill="currentColor"
        opacity="0.7"
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="docGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(240, 90%, 98%)" />
          <stop offset="100%" stopColor="hsl(240, 90%, 95%)" />
        </linearGradient>
        <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(240, 90%, 90%)" />
          <stop offset="100%" stopColor="hsl(240, 90%, 85%)" />
        </linearGradient>
        <linearGradient id="imageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(188, 90%, 75%)" />
          <stop offset="100%" stopColor="hsl(188, 90%, 65%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 transition-colors duration-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3" data-testid="header-logo">
          <div className="flex items-center space-x-2">
            <PdfLogo className="w-10 h-10 text-primary" />
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text leading-none">
                PDF Converter
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 leading-none">
                Images to PDF
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" data-testid="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              data-testid={`nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-[hsl(244,86%,51%)] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            data-testid="button-get-started"
            onClick={() => {
              const converterSection = document.querySelector('#converter');
              if (converterSection) {
                converterSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <FileImage className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden border-t bg-white dark:bg-gray-950 shadow-lg"
          data-testid="mobile-menu"
        >
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t">
              <Button
                variant="default"
                size="sm"
                className="w-full bg-primary hover:bg-[hsl(244,86%,51%)] text-white px-6 py-3 rounded-full font-semibold shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-mobile-get-started"
              >
                <FileImage className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}