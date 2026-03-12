import { ColorSeason } from "@/data/colorSeasons";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ColorResultProps {
  season: ColorSeason;
  onBuildOutfit: () => void;
  onBack: () => void;
}

const ColorResult = ({ season, onBuildOutfit, onBack }: ColorResultProps) => {
  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Season Header */}
      <div className={`bg-gradient-to-br ${season.bgStyle} px-6 pt-8 pb-10`}>
        <div className="max-w-sm mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground font-ui text-sm hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Start over
          </button>
        </div>
        <div className="max-w-sm mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 mb-4">
            <span className="font-ui text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Your Season
            </span>
          </div>
          <h1 className="font-heading text-4xl font-bold mb-3">{season.name}</h1>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
            {season.description}
          </p>
          <div className="flex justify-center gap-2">
            {season.keywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 rounded-full bg-card/70 backdrop-blur-sm text-xs font-ui font-medium text-foreground border border-border/30"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div className="px-6 -mt-6 max-w-sm mx-auto">
        <div className="glass-card-strong p-5">
          <h3 className="font-ui text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-4">
            Your Color Palette
          </h3>
          <div className="grid grid-cols-6 gap-2">
            {season.palette.map((color, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-full aspect-square rounded-xl shadow-soft border border-border/30 hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Avoid Colors */}
      <div className="px-6 mt-4 max-w-sm mx-auto">
        <div className="glass-card p-5">
          <h3 className="font-ui text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3">
            Colors to Avoid
          </h3>
          <div className="flex gap-2">
            {season.avoidColors.map((color, i) => (
              <div key={i} className="relative w-10 h-10">
                <div
                  className="w-10 h-10 rounded-xl border border-border/30"
                  style={{ backgroundColor: color }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <line x1="4" y1="4" x2="24" y2="24" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="24" y1="4" x2="4" y2="24" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lighting disclaimer */}
      <div className="px-6 mt-5 max-w-sm mx-auto">
        <p className="text-xs text-muted-foreground/70 font-body leading-relaxed text-center">
          Results may vary based on lighting conditions. For the most accurate analysis, try scanning in natural daylight or bright, even lighting.
        </p>
      </div>

      {/* CTA */}
      <div className="px-6 mt-6 max-w-sm mx-auto">
        <button
          onClick={onBuildOutfit}
          className="w-full py-4 rounded-2xl bg-primary font-ui font-semibold text-primary-foreground hover:shadow-glow transition-all flex items-center justify-center gap-2 text-lg"
        >
          Build My Outfit <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ColorResult;
