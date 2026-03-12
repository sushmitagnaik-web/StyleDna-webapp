import { useEffect, useState } from "react";

const PASTEL_COLORS = [
  "#FFE5D9", "#DDF5D0", "#E8B4F8", "#B8F542", "#FF6B9D",
  "#87CEEB", "#F7DC6F", "#D8BFD8", "#98FB98", "#FFB6C1",
  "#FAFAD2", "#E0FFFF",
];

const AnalysisAnimation = () => {
  const [visibleSwatches, setVisibleSwatches] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleSwatches((prev) => {
        if (prev >= PASTEL_COLORS.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach via-background to-mint flex flex-col items-center justify-center px-6">
      <div className="mb-10">
        <div className="grid grid-cols-4 gap-3 max-w-[240px]">
          {PASTEL_COLORS.map((color, i) => (
            <div
              key={i}
              className={`w-12 h-12 rounded-xl shadow-soft ${i < visibleSwatches ? "animate-swatch-pop" : "opacity-0"}`}
              style={{
                backgroundColor: color,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>

      <h2 className="font-heading text-2xl text-center mb-2">
        Mapping your unique coloring…
      </h2>
      <p className="text-muted-foreground text-sm font-body text-center">
        Analyzing undertones, contrast & harmony
      </p>

      <div className="mt-8 w-48 h-1 rounded-full bg-border overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${(visibleSwatches / PASTEL_COLORS.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default AnalysisAnimation;
