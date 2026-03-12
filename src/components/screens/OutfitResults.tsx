import { useMemo } from "react";
import { getOutfits, Outfit, OutfitItem, AccessoryItem, hexToColorName } from "@/data/outfitData";
import { RefreshCw, ArrowLeft, Download, Gem } from "lucide-react";
import { toast } from "sonner";

interface OutfitResultsProps {
  gender: string;
  occasion: string;
  palette: string[];
  seasonName: string;
  onRegenerate: () => void;
  onRestart: () => void;
  onBack: () => void;
}

// ─── CATEGORY LABELS ──────────────────────────────────────
const TYPE_LABELS: Record<string, string> = {
  top: "Top",
  bottom: "Bottom",
  shoes: "Shoes",
};

const CATEGORY_EMOJI: Record<string, string> = {
  jewellery: "\u{1F48E}",
  bag: "\u{1F45C}",
  scarf: "\u{1F9E3}",
  belt: "\u{1FAA2}",
  watch: "\u231A",
  sunglasses: "\u{1F576}\uFE0F",
  hair: "\u2728",
};

// ─── COLOR SWATCH CARD ───────────────────────────────────

const SwatchCard = ({ item }: { item: OutfitItem }) => (
  <div className="glass-card overflow-hidden hover:-translate-y-1 hover:shadow-elevated transition-all duration-300">
    <div className="aspect-[4/3] relative" style={{ backgroundColor: item.hex }}>
      <div className="absolute top-2 left-2">
        <span className="px-2 py-0.5 rounded-full bg-black/20 backdrop-blur-sm text-[10px] font-ui font-medium text-white uppercase tracking-wider">
          {TYPE_LABELS[item.type] || item.type}
        </span>
      </div>
    </div>
    <div className="p-3">
      <p className="font-ui text-sm font-semibold text-foreground leading-tight">{item.name}</p>
      <div className="flex items-center gap-1.5 mt-1">
        <div className="w-2.5 h-2.5 rounded-full border border-border/50 shrink-0" style={{ backgroundColor: item.hex }} />
        <span className="text-xs text-muted-foreground font-ui">{item.color}</span>
      </div>
    </div>
  </div>
);

// ─── ACCESSORY CHIP ──────────────────────────────────────

const AccessoryChip = ({ acc }: { acc: AccessoryItem }) => (
  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-card border border-border/50 hover:border-border transition-colors">
    <div
      className="w-6 h-6 rounded-full border border-border/40 shrink-0 shadow-sm"
      style={{ backgroundColor: acc.hex }}
    />
    <div className="min-w-0">
      <p className="font-ui text-xs font-medium text-foreground truncate">{acc.name}</p>
      <p className="text-[10px] text-muted-foreground font-ui flex items-center gap-1">
        <span>{CATEGORY_EMOJI[acc.category] || "\u2022"}</span>
        <span className="capitalize">{acc.category}</span>
        <span className="text-border mx-0.5">\u00B7</span>
        <span>{acc.color}</span>
      </p>
    </div>
  </div>
);

// ─── MAGAZINE-STYLE CANVAS DOWNLOAD ─────────────────────

const generateMagazineCard = async (
  outfit: Outfit,
  gender: string,
  occasion: string,
  palette: string[],
  seasonName: string,
) => {
  toast.info("Creating your style card...");

  const W = 1080;
  const H = 1440;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // ── Background ──
  ctx.fillStyle = "#FAF8F5";
  ctx.fillRect(0, 0, W, H);

  // Subtle border
  ctx.strokeStyle = "#E8E2DA";
  ctx.lineWidth = 2;
  ctx.strokeRect(40, 40, W - 80, H - 80);

  // Inner decorative line
  ctx.strokeStyle = "#E8E2DA";
  ctx.lineWidth = 0.5;
  ctx.strokeRect(52, 52, W - 104, H - 104);

  // ── Top section: Logo ──
  const cx = W / 2;
  ctx.textAlign = "center";

  // "STYLE DNA" wordmark
  ctx.fillStyle = "#1A1A1A";
  ctx.font = "bold 52px Georgia, 'Times New Roman', serif";
  ctx.fillText("STYLE", cx - 60, 120);
  ctx.font = "italic 52px Georgia, 'Times New Roman', serif";
  ctx.fillText("DNA", cx + 68, 120);

  // Thin divider
  ctx.strokeStyle = "#C8C0B6";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - 160, 145);
  ctx.lineTo(cx + 160, 145);
  ctx.stroke();

  // Season name
  ctx.fillStyle = "#6B6560";
  ctx.font = "300 18px Georgia, 'Times New Roman', serif";
  ctx.letterSpacing = "6px";
  ctx.fillText(seasonName.toUpperCase(), cx, 175);
  ctx.letterSpacing = "0px";

  // ── Palette strip ──
  const paletteY = 205;
  const swatchSize = 36;
  const gap = 6;
  const totalPaletteW = palette.length * swatchSize + (palette.length - 1) * gap;
  const paletteStartX = (W - totalPaletteW) / 2;

  for (let i = 0; i < palette.length; i++) {
    const x = paletteStartX + i * (swatchSize + gap);
    ctx.fillStyle = palette[i];
    roundRect(ctx, x, paletteY, swatchSize, swatchSize, 6);
    ctx.fill();
    // Subtle border on swatches
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.lineWidth = 1;
    roundRect(ctx, x, paletteY, swatchSize, swatchSize, 6);
    ctx.stroke();
  }

  // "YOUR COLOR PALETTE" label
  ctx.fillStyle = "#A09890";
  ctx.font = "500 10px -apple-system, 'Helvetica Neue', sans-serif";
  ctx.letterSpacing = "3px";
  ctx.fillText("YOUR COLOR PALETTE", cx, paletteY + swatchSize + 24);
  ctx.letterSpacing = "0px";

  // ── Look title ──
  const lookTitleY = paletteY + swatchSize + 70;
  ctx.fillStyle = "#1A1A1A";
  ctx.font = "bold 40px Georgia, 'Times New Roman', serif";
  ctx.fillText(`LOOK ${outfit.look}`, cx, lookTitleY);

  // Subtitle
  ctx.fillStyle = "#8A8480";
  ctx.font = "300 15px Georgia, 'Times New Roman', serif";
  ctx.letterSpacing = "4px";
  ctx.fillText(`${gender.toUpperCase()} \u00B7 ${occasion.toUpperCase()}`, cx, lookTitleY + 32);
  ctx.letterSpacing = "0px";

  // Thin divider
  ctx.strokeStyle = "#D8D2CC";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - 100, lookTitleY + 52);
  ctx.lineTo(cx + 100, lookTitleY + 52);
  ctx.stroke();

  // ── Clothing swatches grid ──
  const gridY = lookTitleY + 82;
  const cardW = 280;
  const cardH = 220;
  const gridGap = 30;
  const totalGridW = 3 * cardW + 2 * gridGap;
  const gridStartX = (W - totalGridW) / 2;

  outfit.items.forEach((item, i) => {
    const x = gridStartX + i * (cardW + gridGap);

    // Card background
    ctx.fillStyle = "#FFFFFF";
    roundRect(ctx, x, gridY, cardW, cardH, 12);
    ctx.fill();
    ctx.strokeStyle = "#E8E2DA";
    ctx.lineWidth = 1;
    roundRect(ctx, x, gridY, cardW, cardH, 12);
    ctx.stroke();

    // Large color swatch
    const swatchH = 130;
    ctx.fillStyle = item.hex;
    roundRectTop(ctx, x + 1, gridY + 1, cardW - 2, swatchH, 11);
    ctx.fill();

    // Type badge on swatch
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    roundRect(ctx, x + 14, gridY + 14, 52, 22, 11);
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "600 9px -apple-system, 'Helvetica Neue', sans-serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "1px";
    ctx.fillText((TYPE_LABELS[item.type] || item.type).toUpperCase(), x + 40, gridY + 29);
    ctx.letterSpacing = "0px";

    // Item name
    ctx.fillStyle = "#1A1A1A";
    ctx.font = "600 14px -apple-system, 'Helvetica Neue', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(item.name, x + 14, gridY + swatchH + 26);

    // Color dot + name
    ctx.fillStyle = item.hex;
    ctx.beginPath();
    ctx.arc(x + 20, gridY + swatchH + 48, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.1)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = "#8A8480";
    ctx.font = "400 12px -apple-system, 'Helvetica Neue', sans-serif";
    ctx.fillText(item.color, x + 32, gridY + swatchH + 52);
    ctx.textAlign = "center";
  });

  // ── Accessories section ──
  const accY = gridY + cardH + 50;

  // Section title
  ctx.textAlign = "center";
  ctx.fillStyle = "#A09890";
  ctx.font = "500 11px -apple-system, 'Helvetica Neue', sans-serif";
  ctx.letterSpacing = "3px";
  ctx.fillText("ACCESSORIES & JEWELLERY", cx, accY);
  ctx.letterSpacing = "0px";

  // Accessory items in a row
  const accItemH = 60;
  const accGap = 14;
  const numAcc = outfit.accessories.length;
  const accItemW = Math.min(220, (W - 140 - (numAcc - 1) * accGap) / numAcc);
  const totalAccW = numAcc * accItemW + (numAcc - 1) * accGap;
  const accStartX = (W - totalAccW) / 2;
  const accRowY = accY + 20;

  outfit.accessories.forEach((acc, i) => {
    const x = accStartX + i * (accItemW + accGap);

    // Card
    ctx.fillStyle = "#FFFFFF";
    roundRect(ctx, x, accRowY, accItemW, accItemH, 10);
    ctx.fill();
    ctx.strokeStyle = "#E8E2DA";
    ctx.lineWidth = 1;
    roundRect(ctx, x, accRowY, accItemW, accItemH, 10);
    ctx.stroke();

    // Color circle
    const circleX = x + 22;
    const circleY = accRowY + accItemH / 2;
    ctx.fillStyle = acc.hex;
    ctx.beginPath();
    ctx.arc(circleX, circleY, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.lineWidth = 1;
    ctx.stroke();

    // Name
    ctx.textAlign = "left";
    ctx.fillStyle = "#1A1A1A";
    ctx.font = "500 10px -apple-system, 'Helvetica Neue', sans-serif";
    const maxTextW = accItemW - 50;
    const accName = truncateText(ctx, acc.name, maxTextW);
    ctx.fillText(accName, circleX + 18, circleY - 4);

    // Category + color
    ctx.fillStyle = "#A09890";
    ctx.font = "400 9px -apple-system, 'Helvetica Neue', sans-serif";
    ctx.fillText(`${acc.category} \u00B7 ${acc.color}`, circleX + 18, circleY + 12);
  });

  // ── Bottom tagline ──
  ctx.textAlign = "center";

  // Divider
  ctx.strokeStyle = "#D8D2CC";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx - 140, H - 115);
  ctx.lineTo(cx + 140, H - 115);
  ctx.stroke();

  ctx.fillStyle = "#8A8480";
  ctx.font = "italic 16px Georgia, 'Times New Roman', serif";
  ctx.fillText("Curated in your colors", cx, H - 85);

  ctx.fillStyle = "#C8C0B6";
  ctx.font = "400 10px -apple-system, 'Helvetica Neue', sans-serif";
  ctx.letterSpacing = "2px";
  ctx.fillText("STYLEDNA.APP", cx, H - 60);
  ctx.letterSpacing = "0px";

  // ── Download ──
  const link = document.createElement("a");
  link.download = `styledna-look-${outfit.look}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  toast.success("Style card downloaded!");
};

// ── Canvas helpers ──

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function roundRectTop(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function truncateText(ctx: CanvasRenderingContext2D, text: string, maxW: number): string {
  if (ctx.measureText(text).width <= maxW) return text;
  let t = text;
  while (t.length > 0 && ctx.measureText(t + "\u2026").width > maxW) {
    t = t.slice(0, -1);
  }
  return t + "\u2026";
}

// ─── OUTFIT SECTION ──────────────────────────────────────

const OutfitSection = ({
  outfit,
  gender,
  occasion,
  palette,
  seasonName,
}: {
  outfit: Outfit;
  gender: string;
  occasion: string;
  palette: string[];
  seasonName: string;
}) => {
  return (
    <section className="px-6 pt-8 pb-4 max-w-lg mx-auto w-full">
      {/* Look header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-3xl font-bold tracking-tight">
          LOOK {outfit.look}
        </h3>
        <button
          onClick={() => generateMagazineCard(outfit, gender, occasion, palette, seasonName)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border font-ui font-medium text-sm text-foreground hover:bg-muted transition-all"
        >
          <Download className="w-4 h-4" /> Download
        </button>
      </div>

      {/* Clothing items — color swatches in a grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {outfit.items.map((item, i) => (
          <SwatchCard key={i} item={item} />
        ))}
      </div>

      {/* Accessories & Jewellery section */}
      <div className="glass-card p-4">
        <div className="flex items-center gap-2 mb-3">
          <Gem className="w-4 h-4 text-muted-foreground" />
          <h4 className="font-ui text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            Accessories & Jewellery
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {outfit.accessories.map((acc, i) => (
            <AccessoryChip key={i} acc={acc} />
          ))}
        </div>
      </div>

      {/* Subtle divider between looks */}
      <div className="mt-8 border-t border-border/30" />
    </section>
  );
};

// ─── MAIN COMPONENT ─────────────────────────────────────

const OutfitResults = ({ gender, occasion, palette, seasonName, onRegenerate, onRestart, onBack }: OutfitResultsProps) => {
  const outfits = useMemo(() => getOutfits(gender, occasion, palette, seasonName), [gender, occasion, palette, seasonName]);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-6 pb-2 max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-border transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-heading text-2xl">Your Looks</h2>
            <p className="text-muted-foreground font-body text-sm truncate">
              {gender} \u00B7 {occasion} — curated in your colors
            </p>
          </div>
        </div>
      </div>

      {/* Looks */}
      {outfits.map((outfit) => (
        <OutfitSection
          key={outfit.look}
          outfit={outfit}
          gender={gender}
          occasion={occasion}
          palette={palette}
          seasonName={seasonName}
        />
      ))}

      {/* Sticky Regenerate Button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/80 backdrop-blur-md border-t border-border/50">
        <div className="max-w-lg mx-auto">
          <button
            onClick={onRegenerate}
            className="w-full py-3.5 rounded-2xl border border-border font-ui font-semibold text-foreground hover:bg-muted transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" /> Regenerate Looks
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutfitResults;
