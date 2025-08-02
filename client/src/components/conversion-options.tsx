import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

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

interface ConversionOptionsProps {
  options: ConversionOptions;
  onOptionsChange: (options: ConversionOptions) => void;
}

export default function ConversionOptions({ options, onOptionsChange }: ConversionOptionsProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const updateOption = (key: keyof ConversionOptions, value: any) => {
    onOptionsChange({ ...options, [key]: value });
  };

  const updateMargin = (side: keyof ConversionOptions['margins'], value: number) => {
    onOptionsChange({
      ...options,
      margins: { ...options.margins, [side]: value }
    });
  };

  return (
    <Card className="p-6 mb-6 bg-gray-50 dark:bg-card border-gray-200 dark:border-border">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Conversion Options</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div>
          <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Page Size</Label>
          <Select value={options.pageSize} onValueChange={(value) => updateOption('pageSize', value)}>
            <SelectTrigger data-testid="select-page-size">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A4">A4 (210 × 297 mm)</SelectItem>
              <SelectItem value="Letter">Letter (8.5 × 11 in)</SelectItem>
              <SelectItem value="Legal">Legal (8.5 × 14 in)</SelectItem>
              <SelectItem value="A3">A3 (297 × 420 mm)</SelectItem>
              <SelectItem value="A5">A5 (148 × 210 mm)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Orientation</Label>
          <Select value={options.orientation} onValueChange={(value) => updateOption('orientation', value)}>
            <SelectTrigger data-testid="select-orientation">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="portrait">Portrait</SelectItem>
              <SelectItem value="landscape">Landscape</SelectItem>
              <SelectItem value="auto">Auto (based on image)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Image Fitting</Label>
          <Select value={options.imageFit} onValueChange={(value) => updateOption('imageFit', value)}>
            <SelectTrigger data-testid="select-image-fit">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fit">Fit (maintain aspect ratio)</SelectItem>
              <SelectItem value="fill">Fill (may crop image)</SelectItem>
              <SelectItem value="stretch">Stretch (may distort)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Advanced Options Toggle */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <Button
          variant="ghost"
          className="w-full justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          onClick={() => setShowAdvanced(!showAdvanced)}
          data-testid="button-toggle-advanced"
        >
          <h4 className="text-primary font-semibold">Advanced Options</h4>
          {showAdvanced ? (
            <ChevronUp className="text-primary transition-transform duration-300" />
          ) : (
            <ChevronDown className="text-primary transition-transform duration-300" />
          )}
        </Button>
        
        {showAdvanced && (
          <div className="mt-4 space-y-4" data-testid="advanced-options">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Top Margin (mm)</Label>
                <Input
                  type="number"
                  min="0"
                  max="50"
                  value={options.margins.top}
                  onChange={(e) => updateMargin('top', parseInt(e.target.value) || 0)}
                  data-testid="input-margin-top"
                />
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Bottom Margin (mm)</Label>
                <Input
                  type="number"
                  min="0"
                  max="50"
                  value={options.margins.bottom}
                  onChange={(e) => updateMargin('bottom', parseInt(e.target.value) || 0)}
                  data-testid="input-margin-bottom"
                />
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Left Margin (mm)</Label>
                <Input
                  type="number"
                  min="0"
                  max="50"
                  value={options.margins.left}
                  onChange={(e) => updateMargin('left', parseInt(e.target.value) || 0)}
                  data-testid="input-margin-left"
                />
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Right Margin (mm)</Label>
                <Input
                  type="number"
                  min="0"
                  max="50"
                  value={options.margins.right}
                  onChange={(e) => updateMargin('right', parseInt(e.target.value) || 0)}
                  data-testid="input-margin-right"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                  Image Quality ({options.quality}%)
                </Label>
                <Slider
                  value={[options.quality]}
                  onValueChange={(value) => updateOption('quality', value[0])}
                  min={10}
                  max={100}
                  step={5}
                  className="w-full"
                  data-testid="slider-quality"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>10%</span>
                  <span>100%</span>
                </div>
              </div>
              <div>
                <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">PDF Title</Label>
                <Input
                  type="text"
                  placeholder="Enter PDF title (optional)"
                  value={options.pdfTitle}
                  onChange={(e) => updateOption('pdfTitle', e.target.value)}
                  data-testid="input-pdf-title"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}