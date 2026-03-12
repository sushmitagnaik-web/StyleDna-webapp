import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

interface OutfitBuilderProps {
  onGenerate: (gender: string, occasion: string) => void;
  onBack: () => void;
}

const OCCASIONS = [
  { label: "Casual", emoji: "☕" },
  { label: "Work", emoji: "💼" },
  { label: "Formal", emoji: "🥂" },
  { label: "Date", emoji: "🌹" },
  { label: "Party", emoji: "🎉" },
];

const OutfitBuilder = ({ onGenerate, onBack }: OutfitBuilderProps) => {
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground font-ui text-sm hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to results
        </button>
      </div>

      <div className="flex-1 px-6 pb-12 max-w-sm mx-auto w-full">
        <h2 className="font-heading text-3xl mb-1 mt-4">Build your look</h2>
        <p className="text-muted-foreground font-body text-sm mb-8">
          We'll curate outfits in your best colors
        </p>

        {/* Gender */}
        <div className="mb-8">
          <label className="font-ui text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3 block">
            Gender
          </label>
          <div className="flex gap-3">
            {["Female", "Male"].map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`flex-1 py-3.5 rounded-2xl font-ui font-medium transition-all border ${
                  gender === g
                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                    : "bg-card border-border text-foreground hover:border-primary/40"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Occasion */}
        <div className="mb-10">
          <label className="font-ui text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-3 block">
            Occasion
          </label>
          <div className="grid grid-cols-2 gap-3">
            {OCCASIONS.map(({ label, emoji }) => (
              <button
                key={label}
                onClick={() => setOccasion(label)}
                className={`py-3.5 rounded-2xl font-ui font-medium transition-all border flex items-center justify-center gap-2 ${
                  occasion === label
                    ? "bg-primary border-primary text-primary-foreground shadow-glow"
                    : "bg-card border-border text-foreground hover:border-primary/40"
                }`}
              >
                <span>{emoji}</span> {label}
              </button>
            ))}
          </div>
        </div>

        {/* Generate */}
        <button
          onClick={() => gender && occasion && onGenerate(gender, occasion)}
          disabled={!gender || !occasion}
          className="w-full py-4 rounded-2xl bg-primary font-ui font-semibold text-primary-foreground hover:shadow-glow transition-all flex items-center justify-center gap-2 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Sparkles className="w-5 h-5" /> Generate Outfits
        </button>
      </div>
    </div>
  );
};

export default OutfitBuilder;
