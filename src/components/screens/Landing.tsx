import { Camera, Upload } from "lucide-react";

interface LandingProps {
  onScan: () => void;
  onUpload: () => void;
}

// ─── FLOATING SWATCH CARDS ─────────────────────────────────
// Scattered Pantone-style color cards at various positions and angles

const SWATCH_CARDS = [
  { color: "#FF6B6B", name: "Coral Blush", top: "6%", left: "3%", rotate: -12, delay: 0, size: "w-16 h-20" },
  { color: "#4ECDC4", name: "Sea Glass", top: "12%", right: "5%", rotate: 8, delay: 0.6, size: "w-14 h-18" },
  { color: "#FFE66D", name: "Lemon Drop", top: "28%", left: "2%", rotate: 15, delay: 1.2, size: "w-12 h-16" },
  { color: "#A8E6CF", name: "Mint Cream", bottom: "32%", right: "3%", rotate: -8, delay: 0.3, size: "w-14 h-18" },
  { color: "#FF8B94", name: "Rose Petal", bottom: "18%", left: "5%", rotate: 10, delay: 0.9, size: "w-16 h-20" },
  { color: "#DDA0DD", name: "Soft Plum", top: "44%", right: "2%", rotate: -15, delay: 1.5, size: "w-12 h-16" },
  { color: "#87CEEB", name: "Sky Blue", bottom: "10%", right: "8%", rotate: 5, delay: 0.4, size: "w-14 h-18" },
  { color: "#F0E68C", name: "Champagne", top: "4%", left: "45%", rotate: -6, delay: 1.0, size: "w-12 h-16" },
  { color: "#E8D5B7", name: "Nude Sand", bottom: "26%", left: "70%", rotate: 12, delay: 0.7, size: "w-13 h-17" },
];

const SwatchCard = ({
  color,
  name,
  style,
  rotate,
  delay,
  size,
}: {
  color: string;
  name: string;
  style: React.CSSProperties;
  rotate: number;
  delay: number;
  size: string;
}) => (
  <div
    className={`absolute ${size} opacity-0 animate-fade-in`}
    style={{
      ...style,
      animationDelay: `${delay + 0.3}s`,
      animationFillMode: "forwards",
      "--tw-rotate": `${rotate}deg`,
    } as React.CSSProperties}
  >
    <div
      className="w-full h-full rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] animate-float-swatch bg-white overflow-hidden"
      style={{
        transform: `rotate(${rotate}deg)`,
        animationDelay: `${delay}s`,
        animationDuration: `${4.5 + delay * 0.5}s`,
      }}
    >
      {/* Color fill — top 65% */}
      <div className="w-full h-[65%]" style={{ backgroundColor: color }} />
      {/* Label area */}
      <div className="px-1.5 py-1 flex flex-col justify-center h-[35%]">
        <div className="w-full h-[2px] bg-gray-200 mb-0.5" />
        <p className="text-[6px] font-ui font-bold text-gray-700 uppercase tracking-wider truncate">{name}</p>
        <p className="text-[5px] font-ui text-gray-400 uppercase tracking-wider">{color}</p>
      </div>
    </div>
  </div>
);

// ─── BRUSH STROKES ─────────────────────────────────────────
// SVG paint brush strokes as white/translucent decorations

const BrushStroke = ({
  style,
  delay,
  className,
}: {
  style: React.CSSProperties;
  delay: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 200 60"
    className={`absolute opacity-0 animate-fade-in ${className || ""}`}
    style={{ ...style, animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    fill="none"
  >
    <path
      d="M10 30 C30 10, 60 50, 100 25 S160 40, 190 20"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="18"
      strokeLinecap="round"
    />
  </svg>
);

const BrushStroke2 = ({
  style,
  delay,
  className,
}: {
  style: React.CSSProperties;
  delay: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 180 40"
    className={`absolute opacity-0 animate-fade-in ${className || ""}`}
    style={{ ...style, animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    fill="none"
  >
    <path
      d="M5 20 Q45 5, 90 22 T175 15"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="14"
      strokeLinecap="round"
    />
  </svg>
);

const BrushDot = ({
  style,
  delay,
  size,
}: {
  style: React.CSSProperties;
  delay: number;
  size: number;
}) => (
  <div
    className="absolute rounded-full opacity-0 animate-fade-in"
    style={{
      ...style,
      width: size,
      height: size,
      backgroundColor: "rgba(255,255,255,0.07)",
      animationDelay: `${delay}s`,
      animationFillMode: "forwards",
    }}
  />
);

// ─── LANDING COMPONENT ────────────────────────────────────

const Landing = ({ onScan, onUpload }: LandingProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#7B4FD4" }}>
      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(147,95,230,0.5) 0%, transparent 60%), " +
            "radial-gradient(ellipse at 70% 80%, rgba(100,50,180,0.4) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 50% 50%, rgba(123,79,212,0) 0%, rgba(60,30,120,0.3) 100%)",
        }}
      />

      {/* Brush strokes — scattered white paint decorations */}
      <BrushStroke style={{ top: "8%", left: "-5%", width: 260 }} delay={0.2} />
      <BrushStroke style={{ bottom: "15%", right: "-3%", width: 220, transform: "rotate(12deg)" }} delay={0.5} />
      <BrushStroke2 style={{ top: "50%", left: "10%", width: 200, transform: "rotate(-8deg)" }} delay={0.8} />
      <BrushStroke2 style={{ top: "25%", right: "5%", width: 180, transform: "rotate(5deg) scaleY(-1)" }} delay={1.1} />
      <BrushStroke style={{ bottom: "40%", left: "20%", width: 160, transform: "rotate(-15deg)" }} delay={0.6} />

      {/* Brush dots — soft circular paint marks */}
      <BrushDot style={{ top: "15%", left: "25%" }} delay={0.4} size={80} />
      <BrushDot style={{ bottom: "20%", right: "20%" }} delay={0.7} size={60} />
      <BrushDot style={{ top: "60%", left: "8%" }} delay={1.0} size={45} />
      <BrushDot style={{ top: "35%", right: "12%" }} delay={0.9} size={35} />

      {/* Floating swatch cards */}
      {SWATCH_CARDS.map((swatch, i) => {
        const posStyle: React.CSSProperties = {};
        if (swatch.top) posStyle.top = swatch.top;
        if (swatch.bottom) posStyle.bottom = swatch.bottom;
        if (swatch.left) posStyle.left = swatch.left;
        if (swatch.right) posStyle.right = swatch.right;

        return (
          <SwatchCard
            key={i}
            color={swatch.color}
            name={swatch.name}
            style={posStyle}
            rotate={swatch.rotate}
            delay={swatch.delay}
            size={swatch.size}
          />
        );
      })}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Headline */}
        <div
          className="text-center mb-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-3 text-white drop-shadow-lg">
            Style<span className="italic">DNA</span>
          </h1>
          <p className="text-lg font-body text-white/80">
            Discover your personal color story
          </p>
        </div>

        {/* Action buttons */}
        <div
          className="flex flex-col gap-4 w-full max-w-sm opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <button
            onClick={onScan}
            className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(123,79,212,0.12)" }}>
              <Camera className="w-6 h-6" style={{ color: "#7B4FD4" }} />
            </div>
            <div className="text-left">
              <p className="font-ui font-semibold text-gray-900">Scan Face</p>
              <p className="text-sm font-body text-gray-500">Most accurate</p>
            </div>
          </button>

          <button
            onClick={onUpload}
            className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(123,79,212,0.12)" }}>
              <Upload className="w-6 h-6" style={{ color: "#7B4FD4" }} />
            </div>
            <div className="text-left">
              <p className="font-ui font-semibold text-gray-900">Upload Photo</p>
              <p className="text-sm font-body text-gray-500">JPG, PNG, WEBP</p>
            </div>
          </button>
        </div>

        {/* Privacy note */}
        <p
          className="mt-8 text-xs font-ui text-white/50 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          Your photo is analyzed locally and never stored
        </p>
      </div>
    </div>
  );
};

export default Landing;
