export interface OutfitItem {
  type: "top" | "bottom" | "shoes";
  name: string;
  color: string;
  hex: string;
}

export interface AccessoryItem {
  name: string;
  category: "jewellery" | "bag" | "scarf" | "belt" | "watch" | "sunglasses" | "hair";
  color: string;
  hex: string;
}

export interface Outfit {
  look: number;
  items: OutfitItem[];
  accessories: AccessoryItem[];
}

// ─── ITEM POOLS ────────────────────────────────────────────

interface PoolItem {
  name: string;
  occasions: string[];
}

// Female clothing pools
const FEMALE_TOPS: PoolItem[] = [
  { name: "Oversized Linen Shirt", occasions: ["casual", "work"] },
  { name: "Ribbed Knit Tank", occasions: ["casual", "date"] },
  { name: "Cotton Poplin Blouse", occasions: ["casual", "work"] },
  { name: "Silk Button-Up", occasions: ["work", "formal"] },
  { name: "Merino Turtleneck", occasions: ["work", "casual"] },
  { name: "Draped Satin Top", occasions: ["formal", "date", "party"] },
  { name: "Wrap Bodysuit", occasions: ["date", "party"] },
  { name: "Sequin Cami", occasions: ["party", "date"] },
  { name: "Cropped Cardigan", occasions: ["casual", "work"] },
  { name: "Off-Shoulder Blouse", occasions: ["date", "casual", "party"] },
  { name: "Linen Crop Top", occasions: ["casual", "date"] },
  { name: "Structured Blazer", occasions: ["work", "formal"] },
  { name: "Peplum Top", occasions: ["work", "date"] },
  { name: "Cashmere V-Neck", occasions: ["casual", "work", "date"] },
  { name: "Ruffle Blouse", occasions: ["date", "formal", "work"] },
];

const FEMALE_BOTTOMS: PoolItem[] = [
  { name: "Wide Leg Trousers", occasions: ["casual", "work"] },
  { name: "Midi Slip Skirt", occasions: ["casual", "date"] },
  { name: "Straight Leg Jeans", occasions: ["casual"] },
  { name: "Tailored Trousers", occasions: ["work", "formal"] },
  { name: "Pencil Skirt", occasions: ["work", "formal"] },
  { name: "Silk Wide Pants", occasions: ["formal", "date"] },
  { name: "Satin Midi Skirt", occasions: ["date", "party"] },
  { name: "Leather Mini Skirt", occasions: ["party"] },
  { name: "Pleated Maxi Skirt", occasions: ["casual", "date", "formal"] },
  { name: "High-Waist Culottes", occasions: ["casual", "work"] },
  { name: "Linen Shorts", occasions: ["casual"] },
  { name: "Draped Palazzo Pants", occasions: ["formal", "party", "date"] },
  { name: "A-Line Skirt", occasions: ["work", "casual", "date"] },
  { name: "Wrap Skirt", occasions: ["casual", "date"] },
];

const FEMALE_SHOES: PoolItem[] = [
  { name: "Leather Mules", occasions: ["casual", "work"] },
  { name: "Canvas Sneakers", occasions: ["casual"] },
  { name: "Strappy Sandals", occasions: ["casual", "date"] },
  { name: "Leather Pumps", occasions: ["work", "formal"] },
  { name: "Block Heel Boots", occasions: ["work", "casual"] },
  { name: "Strappy Heels", occasions: ["formal", "party", "date"] },
  { name: "Kitten Heels", occasions: ["date", "work"] },
  { name: "Platform Heels", occasions: ["party", "formal"] },
  { name: "Ballet Flats", occasions: ["casual", "work", "date"] },
  { name: "Ankle Boots", occasions: ["casual", "work", "party"] },
  { name: "Espadrille Wedges", occasions: ["casual", "date"] },
  { name: "Pointed Slingbacks", occasions: ["work", "formal", "date"] },
  { name: "Loafers", occasions: ["casual", "work"] },
  { name: "Stiletto Heels", occasions: ["party", "formal", "date"] },
];

// Male clothing pools
const MALE_TOPS: PoolItem[] = [
  { name: "Relaxed Oxford Shirt", occasions: ["casual", "work"] },
  { name: "Merino Polo", occasions: ["casual", "date"] },
  { name: "Cotton Dress Shirt", occasions: ["work", "formal"] },
  { name: "Linen Camp Shirt", occasions: ["casual", "date"] },
  { name: "Silk Blend Shirt", occasions: ["party", "formal"] },
  { name: "Cashmere Crewneck", occasions: ["casual", "work", "date"] },
  { name: "Henley Shirt", occasions: ["casual", "date"] },
  { name: "Turtleneck Sweater", occasions: ["work", "date", "formal"] },
  { name: "Bomber Jacket", occasions: ["casual", "party"] },
  { name: "Knit Cardigan", occasions: ["casual", "work"] },
  { name: "Velvet Blazer", occasions: ["party", "formal", "date"] },
  { name: "Chambray Shirt", occasions: ["casual", "date"] },
  { name: "Quarter-Zip Pullover", occasions: ["casual", "work"] },
  { name: "Mandarin Collar Shirt", occasions: ["date", "formal", "party"] },
];

const MALE_BOTTOMS: PoolItem[] = [
  { name: "Chinos", occasions: ["casual", "work"] },
  { name: "Slim Jeans", occasions: ["casual", "date"] },
  { name: "Wool Trousers", occasions: ["work", "formal"] },
  { name: "Tailored Chinos", occasions: ["date", "work"] },
  { name: "Tuxedo Trousers", occasions: ["formal", "party"] },
  { name: "Slim Trousers", occasions: ["party", "work", "date"] },
  { name: "Linen Pants", occasions: ["casual", "date"] },
  { name: "Corduroy Trousers", occasions: ["casual", "work"] },
  { name: "Cargo Pants", occasions: ["casual"] },
  { name: "Pleated Trousers", occasions: ["work", "formal", "date"] },
  { name: "Jogger Pants", occasions: ["casual"] },
  { name: "Tapered Dress Pants", occasions: ["work", "formal", "date"] },
];

const MALE_SHOES: PoolItem[] = [
  { name: "Leather Loafers", occasions: ["casual", "work", "date"] },
  { name: "Minimalist Sneakers", occasions: ["casual"] },
  { name: "Derby Shoes", occasions: ["work", "formal"] },
  { name: "Suede Chelsea Boots", occasions: ["date", "casual", "party"] },
  { name: "Patent Oxfords", occasions: ["formal"] },
  { name: "Chelsea Boots", occasions: ["party", "date", "casual"] },
  { name: "Canvas Sneakers", occasions: ["casual"] },
  { name: "Monk Strap Shoes", occasions: ["work", "formal", "date"] },
  { name: "Driving Moccasins", occasions: ["casual", "date"] },
  { name: "Brogue Boots", occasions: ["work", "casual"] },
  { name: "Leather Sandals", occasions: ["casual"] },
  { name: "Wingtip Oxfords", occasions: ["formal", "work"] },
];

// ─── ACCESSORY & JEWELLERY POOLS ─────────────────────────

interface AccessoryPoolItem {
  name: string;
  category: AccessoryItem["category"];
  occasions: string[];
  metallic?: boolean;
}

const FEMALE_ACCESSORIES: AccessoryPoolItem[] = [
  { name: "Gold Hoop Earrings", category: "jewellery", occasions: ["casual", "date", "party", "work"], metallic: true },
  { name: "Pearl Drop Earrings", category: "jewellery", occasions: ["work", "formal", "date"], metallic: true },
  { name: "Statement Chandelier Earrings", category: "jewellery", occasions: ["party", "formal"], metallic: true },
  { name: "Dainty Pendant Necklace", category: "jewellery", occasions: ["casual", "date", "work"], metallic: true },
  { name: "Layered Chain Necklace", category: "jewellery", occasions: ["casual", "date", "party"], metallic: true },
  { name: "Tennis Bracelet", category: "jewellery", occasions: ["formal", "party", "date"], metallic: true },
  { name: "Charm Bracelet", category: "jewellery", occasions: ["casual", "date"], metallic: true },
  { name: "Cocktail Ring", category: "jewellery", occasions: ["party", "formal", "date"], metallic: true },
  { name: "Stackable Rings Set", category: "jewellery", occasions: ["casual", "date", "work"], metallic: true },
  { name: "Cuff Bangle", category: "jewellery", occasions: ["work", "party", "date"], metallic: true },
  { name: "Choker Necklace", category: "jewellery", occasions: ["party", "date"], metallic: true },
  { name: "Pearl Strand Necklace", category: "jewellery", occasions: ["formal", "work"], metallic: true },
  { name: "Woven Tote Bag", category: "bag", occasions: ["casual"] },
  { name: "Structured Leather Bag", category: "bag", occasions: ["work", "formal"] },
  { name: "Clutch Bag", category: "bag", occasions: ["formal", "party", "date"] },
  { name: "Crossbody Bag", category: "bag", occasions: ["casual", "work"] },
  { name: "Beaded Evening Bag", category: "bag", occasions: ["party", "formal"] },
  { name: "Canvas Tote", category: "bag", occasions: ["casual"] },
  { name: "Silk Scarf", category: "scarf", occasions: ["work", "casual", "formal"] },
  { name: "Embellished Headband", category: "hair", occasions: ["party", "date", "casual"] },
  { name: "Oversized Sunglasses", category: "sunglasses", occasions: ["casual", "date"] },
  { name: "Thin Belt", category: "belt", occasions: ["work", "casual", "date"] },
  { name: "Chain Belt", category: "belt", occasions: ["party", "date"], metallic: true },
  { name: "Elegant Watch", category: "watch", occasions: ["work", "casual", "date", "formal"], metallic: true },
];

const MALE_ACCESSORIES: AccessoryPoolItem[] = [
  { name: "Silver Chain Bracelet", category: "jewellery", occasions: ["casual", "date", "party"], metallic: true },
  { name: "Signet Ring", category: "jewellery", occasions: ["casual", "date", "work", "formal"], metallic: true },
  { name: "Leather Wrap Bracelet", category: "jewellery", occasions: ["casual", "date"] },
  { name: "Chain Necklace", category: "jewellery", occasions: ["party", "casual", "date"], metallic: true },
  { name: "Beaded Bracelet", category: "jewellery", occasions: ["casual", "date"] },
  { name: "Cuff Links", category: "jewellery", occasions: ["formal", "work"], metallic: true },
  { name: "Tie Bar", category: "jewellery", occasions: ["work", "formal"], metallic: true },
  { name: "Lapel Pin", category: "jewellery", occasions: ["formal", "party", "work"], metallic: true },
  { name: "Leather Belt", category: "belt", occasions: ["work", "casual", "date", "formal"] },
  { name: "Canvas Belt", category: "belt", occasions: ["casual"] },
  { name: "Leather Watch", category: "watch", occasions: ["casual", "work", "date", "formal"] },
  { name: "Metal Watch", category: "watch", occasions: ["work", "formal", "party"], metallic: true },
  { name: "Pocket Square", category: "scarf", occasions: ["formal", "work", "party"] },
  { name: "Silk Tie", category: "scarf", occasions: ["work", "formal"] },
  { name: "Knit Scarf", category: "scarf", occasions: ["casual", "work"] },
  { name: "Aviator Sunglasses", category: "sunglasses", occasions: ["casual", "date"] },
];

// ─── POOLS LOOKUP ─────────────────────────────────────────

const CLOTHING_POOLS: Record<string, Record<string, PoolItem[]>> = {
  female: { top: FEMALE_TOPS, bottom: FEMALE_BOTTOMS, shoes: FEMALE_SHOES },
  male: { top: MALE_TOPS, bottom: MALE_BOTTOMS, shoes: MALE_SHOES },
};

const ACCESSORY_POOLS: Record<string, AccessoryPoolItem[]> = {
  female: FEMALE_ACCESSORIES,
  male: MALE_ACCESSORIES,
};

// ─── COLOR HELPERS ─────────────────────────────────────────

export const hexToColorName = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2 / 255;

  if (l > 0.92) return "Ivory";
  if (l < 0.12) return "Black";
  if (max - min < 25) return l > 0.6 ? "Silver" : l > 0.35 ? "Grey" : "Charcoal";
  if (r >= g && r >= b) {
    if (g > 180 && r > 200) return "Gold";
    if (g > 150) return "Peach";
    if (b > 150) return "Rose";
    if (r > 200 && g < 100) return "Red";
    return "Coral";
  }
  if (g >= r && g >= b) {
    if (r > 150) return "Sage";
    if (b > 150) return "Teal";
    if (g > 200) return "Emerald";
    return "Forest";
  }
  if (r > 150) return "Lavender";
  if (g > 150) return "Sky";
  if (b > 200 && r < 100) return "Cobalt";
  return "Navy";
};

const METALLIC_COLORS = [
  { name: "Gold", hex: "#D4AF37" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Rose Gold", hex: "#B76E79" },
];

// ─── SEASON-AWARE NEUTRAL SYSTEM ──────────────────────────
// Each season family has specific neutral tones that work.

interface NeutralSet {
  colors: Array<{ name: string; hex: string }>;
}

const SEASON_NEUTRALS: Record<string, NeutralSet> = {
  // Winters
  "Bright Winter":  { colors: [{ name: "Black", hex: "#1A1A1A" }, { name: "Ivory", hex: "#FFFFF0" }, { name: "Navy", hex: "#191970" }, { name: "Charcoal", hex: "#36454F" }] },
  "Dark Winter":    { colors: [{ name: "Black", hex: "#1A1A1A" }, { name: "Charcoal", hex: "#36454F" }, { name: "Ivory", hex: "#FFFFF0" }, { name: "Navy", hex: "#191970" }] },
  "Cool Winter":    { colors: [{ name: "Black", hex: "#1A1A1A" }, { name: "Soft White", hex: "#F0F0F0" }, { name: "Charcoal", hex: "#36454F" }, { name: "Slate", hex: "#708090" }] },
  // Springs
  "Bright Spring":  { colors: [{ name: "Ivory", hex: "#FFFFF0" }, { name: "Navy", hex: "#1B2A4A" }, { name: "Light Camel", hex: "#D2B48C" }, { name: "Warm White", hex: "#FAF0E6" }] },
  "Light Spring":   { colors: [{ name: "Ivory", hex: "#FFFFF0" }, { name: "Light Camel", hex: "#D2B48C" }, { name: "Warm White", hex: "#FAF0E6" }, { name: "Soft Grey", hex: "#C8C8C8" }] },
  "Warm Spring":    { colors: [{ name: "Ivory", hex: "#FFFFF0" }, { name: "Camel", hex: "#C19A6B" }, { name: "Warm White", hex: "#FAF0E6" }, { name: "Brown", hex: "#8B6914" }] },
  // Summers
  "Soft Summer":    { colors: [{ name: "Soft White", hex: "#F5F5F0" }, { name: "Grey", hex: "#A9A9A9" }, { name: "Taupe", hex: "#B3A89C" }, { name: "Cocoa", hex: "#8B7D7B" }] },
  "Light Summer":   { colors: [{ name: "Soft White", hex: "#F5F5F0" }, { name: "Light Grey", hex: "#C8C8C8" }, { name: "Taupe", hex: "#B3A89C" }, { name: "Rose Beige", hex: "#C5B4A0" }] },
  "Cool Summer":    { colors: [{ name: "Soft White", hex: "#F0F0F0" }, { name: "Grey", hex: "#A9A9A9" }, { name: "Charcoal", hex: "#4A4A4A" }, { name: "Taupe", hex: "#B3A89C" }] },
  // Autumns
  "Soft Autumn":    { colors: [{ name: "Camel", hex: "#C19A6B" }, { name: "Cream", hex: "#FFFDD0" }, { name: "Warm Brown", hex: "#8B7355" }, { name: "Tan", hex: "#D2B48C" }] },
  "Warm Autumn":    { colors: [{ name: "Camel", hex: "#C19A6B" }, { name: "Cream", hex: "#FFFDD0" }, { name: "Chocolate", hex: "#5C4033" }, { name: "Tan", hex: "#D2B48C" }] },
  "Dark Autumn":    { colors: [{ name: "Chocolate", hex: "#5C4033" }, { name: "Cream", hex: "#FFFDD0" }, { name: "Warm Brown", hex: "#6B4423" }, { name: "Camel", hex: "#C19A6B" }] },
};

// Fallback neutrals
const DEFAULT_NEUTRALS: NeutralSet = {
  colors: [{ name: "Black", hex: "#1A1A1A" }, { name: "Ivory", hex: "#FFFFF0" }, { name: "Grey", hex: "#A9A9A9" }, { name: "Taupe", hex: "#B3A89C" }],
};

// ─── PALETTE ANALYSIS ─────────────────────────────────────
// Classify palette colors into neutrals vs accents

function colorSaturation(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max === 0) return 0;
  return (max - min) / max;
}

function colorLightness(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (Math.max(r, g, b) + Math.min(r, g, b)) / 2 / 255;
}

interface ClassifiedColor {
  hex: string;
  name: string;
  isNeutral: boolean;
}

function classifyPalette(palette: string[]): ClassifiedColor[] {
  return palette.map((hex) => {
    const sat = colorSaturation(hex);
    const lit = colorLightness(hex);
    // A color is "neutral" if it's very low saturation, very dark, or very light
    const isNeutral = sat < 0.15 || lit > 0.88 || lit < 0.15;
    return { hex, name: hexToColorName(hex), isNeutral };
  });
}

// ─── OUTFIT COLOR FORMULAS ────────────────────────────────
// Each formula produces a color assignment for: top, bottom, shoes, bag

type ColorFormula = "neutral-accent" | "tonal" | "neutral-pop";

interface ColorAssignment {
  top: { hex: string; name: string };
  bottom: { hex: string; name: string };
  shoes: { hex: string; name: string };
  bagColor: { hex: string; name: string };
  nonMetallicAccColor: { hex: string; name: string };
}

function buildColorAssignment(
  formula: ColorFormula,
  neutrals: Array<{ name: string; hex: string }>,
  accents: ClassifiedColor[],
  allPalette: ClassifiedColor[],
  isParty: boolean,
  rng: () => number,
): ColorAssignment {
  const pickRandom = <T>(arr: T[]): T => arr[Math.floor(rng() * arr.length)];
  const n = (idx: number) => neutrals[idx % neutrals.length];

  // For shoes & bags: always pick from neutrals unless party
  const shoeNeutral = pickRandom(neutrals);
  // Bag complements shoes — same or adjacent neutral
  const shoeIdx = neutrals.indexOf(shoeNeutral);
  const bagNeutral = neutrals[(shoeIdx + (rng() > 0.5 ? 0 : 1)) % neutrals.length];

  if (formula === "neutral-accent") {
    // Neutral base + ONE accent pop
    // Top = accent, Bottom = neutral, Shoes = neutral
    // OR Top = neutral, Bottom = accent
    const accent = accents.length > 0 ? pickRandom(accents) : allPalette[Math.floor(rng() * allPalette.length)];
    const baseNeutral = pickRandom(neutrals);
    const topIsAccent = rng() > 0.4; // 60% chance top gets the color

    return {
      top: topIsAccent ? { hex: accent.hex, name: accent.name } : baseNeutral,
      bottom: topIsAccent ? baseNeutral : { hex: accent.hex, name: accent.name },
      shoes: isParty ? { hex: accent.hex, name: accent.name } : shoeNeutral,
      bagColor: bagNeutral,
      nonMetallicAccColor: baseNeutral,
    };
  }

  if (formula === "tonal") {
    // Same color family, different shades — pick 2-3 palette colors close in hue
    // Use the full palette sorted by hue, pick a cluster
    const sorted = [...allPalette].sort((a, b) => getHue(a.hex) - getHue(b.hex));
    const startIdx = Math.floor(rng() * sorted.length);
    const c1 = sorted[startIdx % sorted.length];
    const c2 = sorted[(startIdx + 1) % sorted.length];

    return {
      top: { hex: c1.hex, name: c1.name },
      bottom: { hex: c2.hex, name: c2.name },
      shoes: isParty ? { hex: c1.hex, name: c1.name } : shoeNeutral,
      bagColor: bagNeutral,
      nonMetallicAccColor: { hex: c1.hex, name: c1.name },
    };
  }

  // "neutral-pop" — Neutral + neutral + one small pop (via accessory)
  // All clothing is neutral, the pop comes from one accessory
  const n1 = pickRandom(neutrals);
  let n2 = pickRandom(neutrals);
  // Ensure top and bottom are different neutrals
  let attempts = 0;
  while (n2.hex === n1.hex && neutrals.length > 1 && attempts < 5) {
    n2 = pickRandom(neutrals);
    attempts++;
  }

  const popColor = accents.length > 0 ? pickRandom(accents) : allPalette[Math.floor(rng() * allPalette.length)];

  return {
    top: n1,
    bottom: n2,
    shoes: shoeNeutral,
    bagColor: bagNeutral,
    nonMetallicAccColor: { hex: popColor.hex, name: popColor.name },
  };
}

function getHue(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  if (d === 0) return 0;
  let h = 0;
  if (max === r) h = ((g - b) / d + 6) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return h * 60;
}

// ─── SEEDED SHUFFLE ────────────────────────────────────────

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── MAIN EXPORT ──────────────────────────────────────────

export const getOutfits = (gender: string, occasion: string, palette?: string[], seasonName?: string): Outfit[] => {
  const genderKey = gender.toLowerCase();
  const occasionKey = occasion.toLowerCase();

  const clothingPools = CLOTHING_POOLS[genderKey];
  const accessoryPool = ACCESSORY_POOLS[genderKey];

  if (!clothingPools || !accessoryPool) {
    console.warn(`Unknown gender "${gender}", falling back to female`);
    return getOutfits("female", occasion, palette, seasonName);
  }

  const seed = Date.now();
  const rng = seededRandom(seed);

  const types: Array<"top" | "bottom" | "shoes"> = ["top", "bottom", "shoes"];
  const isParty = occasionKey === "party";

  // ── 1. Get season-specific neutrals ──
  const seasonNeutrals = (seasonName && SEASON_NEUTRALS[seasonName]) || DEFAULT_NEUTRALS;

  // ── 2. Classify palette into neutrals vs accents ──
  const classified = classifyPalette(palette || []);
  const paletteAccents = classified.filter((c) => !c.isNeutral);

  // ── 3. Assign formulas to 3 looks — one of each for variety ──
  const formulas: ColorFormula[] = shuffle(["neutral-accent", "tonal", "neutral-pop"] as ColorFormula[], rng);

  // ── 4. Filter clothing pools by occasion ──
  const filteredPools: Record<string, PoolItem[]> = {};
  for (const t of types) {
    const pool = clothingPools[t] || [];
    const matching = pool.filter((p) => p.occasions.includes(occasionKey));
    filteredPools[t] = matching.length >= 2 ? shuffle(matching, rng) : shuffle(pool, rng);
  }

  // Filter accessories by occasion
  const matchingAcc = accessoryPool.filter((a) => a.occasions.includes(occasionKey));
  const filteredAcc = matchingAcc.length >= 4 ? shuffle(matchingAcc, rng) : shuffle(accessoryPool, rng);

  // ── 5. Generate 3 looks ──
  const outfits: Outfit[] = [];
  const usedItemNames = new Set<string>();

  for (let look = 0; look < 3; look++) {
    const formula = formulas[look];

    // Build color assignment for this look
    const colors = buildColorAssignment(formula, seasonNeutrals.colors, paletteAccents, classified, isParty, rng);

    // Pick clothing items
    const items: OutfitItem[] = types.map((type) => {
      const pool = filteredPools[type];
      let picked = pool.find((p) => !usedItemNames.has(p.name));
      if (!picked) picked = pool[look % pool.length];
      usedItemNames.add(picked.name);

      // Assign color based on item type and formula
      let c: { hex: string; name: string };
      if (type === "top") c = colors.top;
      else if (type === "bottom") c = colors.bottom;
      else c = colors.shoes; // shoes

      return { type, name: picked.name, color: c.name, hex: c.hex };
    });

    // Pick accessories
    const numAcc = 3 + Math.floor(rng() * 2);
    const usedCategories = new Set<string>();
    const accessories: AccessoryItem[] = [];
    const accStart = look * 5;

    for (let i = 0; i < filteredAcc.length && accessories.length < numAcc; i++) {
      const acc = filteredAcc[(accStart + i) % filteredAcc.length];
      if (usedCategories.has(acc.category) && acc.category !== "jewellery") continue;
      if (acc.category === "jewellery" && accessories.filter((a) => a.category === "jewellery").length >= 2) continue;

      let accHex: string;
      let accColor: string;

      if (acc.metallic) {
        const metal = METALLIC_COLORS[Math.floor(rng() * METALLIC_COLORS.length)];
        accHex = metal.hex;
        accColor = metal.name;
      } else if (acc.category === "bag") {
        // Bag complements shoes
        accHex = colors.bagColor.hex;
        accColor = colors.bagColor.name;
      } else if (acc.category === "belt") {
        // Belt matches shoes or bag
        const beltSource = rng() > 0.5 ? colors.shoes : colors.bagColor;
        accHex = beltSource.hex;
        accColor = beltSource.name;
      } else {
        // Scarves, headbands, sunglasses — use the accent/pop color
        accHex = colors.nonMetallicAccColor.hex;
        accColor = colors.nonMetallicAccColor.name;
      }

      accessories.push({ name: acc.name, category: acc.category, color: accColor, hex: accHex });
      usedCategories.add(acc.category);
    }

    // Guarantee at least 1 jewellery item
    if (!accessories.some((a) => a.category === "jewellery")) {
      const jewelleryItems = filteredAcc.filter((a) => a.category === "jewellery");
      if (jewelleryItems.length > 0) {
        const j = jewelleryItems[look % jewelleryItems.length];
        const metal = METALLIC_COLORS[Math.floor(rng() * METALLIC_COLORS.length)];
        accessories.push({ name: j.name, category: j.category, color: metal.name, hex: metal.hex });
      }
    }

    outfits.push({ look: look + 1, items, accessories });
  }

  return outfits;
};
