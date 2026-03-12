export interface ColorSeason {
  name: string;
  keywords: string[];
  palette: string[];
  avoidColors: string[];
  description: string;
  bgStyle: string;
}

export const COLOR_SEASONS: Record<string, ColorSeason> = {
  "Bright Spring": {
    name: "Bright Spring",
    keywords: ["Vibrant", "Warm", "Fresh"],
    palette: ["#FF6B4A", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6B9D", "#FFA94D", "#45B7D1", "#98D8C8", "#F7DC6F", "#C39BD3", "#FF8C94", "#82E0AA"],
    avoidColors: ["#808080", "#2C3E50", "#4A235A"],
    description: "Your coloring is warm with high contrast. Bold, clear colors make you glow.",
    bgStyle: "from-peach via-mint to-primary/20",
  },
  "Light Spring": {
    name: "Light Spring",
    keywords: ["Delicate", "Warm", "Airy"],
    palette: ["#FFDAB9", "#FFE4B5", "#98FB98", "#87CEEB", "#FFB6C1", "#DDA0DD", "#F0E68C", "#B0E0E6", "#FAFAD2", "#E6E6FA", "#FFC0CB", "#90EE90"],
    avoidColors: ["#000000", "#800000", "#191970"],
    description: "Your coloring is light and warm. Soft, delicate colors complement your natural glow.",
    bgStyle: "from-peach via-card to-mint",
  },
  "Warm Spring": {
    name: "Warm Spring",
    keywords: ["Golden", "Earthy", "Radiant"],
    palette: ["#DAA520", "#CD853F", "#F4A460", "#8FBC8F", "#D2691E", "#FF8C00", "#BDB76B", "#BC8F8F", "#FFD700", "#9ACD32", "#FF7F50", "#DEB887"],
    avoidColors: ["#C0C0C0", "#708090", "#4682B4"],
    description: "Your warmth radiates through golden and earthy tones.",
    bgStyle: "from-peach via-yellow-100 to-orange-100",
  },
  "Bright Winter": {
    name: "Bright Winter",
    keywords: ["Bold", "Cool", "Striking"],
    palette: ["#FF0066", "#0000FF", "#00FF00", "#FF00FF", "#00FFFF", "#FFFF00", "#FF3333", "#3333FF", "#33FF33", "#FF33FF", "#33FFFF", "#FF6600"],
    avoidColors: ["#D2B48C", "#F5DEB3", "#FAEBD7"],
    description: "Your coloring is cool with high contrast. Bold, electric colors are your power palette.",
    bgStyle: "from-secondary/30 via-card to-accent/20",
  },
  "Dark Winter": {
    name: "Dark Winter",
    keywords: ["Rich", "Deep", "Dramatic"],
    palette: ["#8B0000", "#191970", "#006400", "#4B0082", "#800080", "#B22222", "#2F4F4F", "#8B008B", "#483D8B", "#DC143C", "#228B22", "#4169E1"],
    avoidColors: ["#FFE4B5", "#FFEFD5", "#FFF8DC"],
    description: "Deep, rich colors with cool undertones create dramatic elegance.",
    bgStyle: "from-slate-200 via-card to-secondary/20",
  },
  "Cool Winter": {
    name: "Cool Winter",
    keywords: ["Icy", "Crisp", "Elegant"],
    palette: ["#E8E8E8", "#C0C0C0", "#4169E1", "#FF1493", "#00CED1", "#9370DB", "#F0F8FF", "#B0C4DE", "#DDA0DD", "#87CEFA", "#FFB6C1", "#E0FFFF"],
    avoidColors: ["#FF8C00", "#DAA520", "#CD853F"],
    description: "Icy, crisp tones with blue undertones enhance your cool elegance.",
    bgStyle: "from-blue-50 via-card to-purple-50",
  },
  "Soft Summer": {
    name: "Soft Summer",
    keywords: ["Muted", "Gentle", "Romantic"],
    palette: ["#B0C4DE", "#D8BFD8", "#BC8F8F", "#8FBC8F", "#DEB887", "#C0C0C0", "#A9A9A9", "#D3D3D3", "#DCDCDC", "#E6E6FA", "#F0E68C", "#98D8C8"],
    avoidColors: ["#FF0000", "#00FF00", "#0000FF"],
    description: "Soft, muted tones with gentle contrast create a romantic, understated beauty.",
    bgStyle: "from-secondary/20 via-card to-muted",
  },
  "Light Summer": {
    name: "Light Summer",
    keywords: ["Pastel", "Cool", "Ethereal"],
    palette: ["#E6E6FA", "#B0E0E6", "#FFB6C1", "#98FB98", "#DDA0DD", "#87CEEB", "#FAFAD2", "#F0E68C", "#E0FFFF", "#FFC0CB", "#D8BFD8", "#ADD8E6"],
    avoidColors: ["#8B4513", "#A0522D", "#D2691E"],
    description: "Light, cool pastels create an ethereal, dreamy quality.",
    bgStyle: "from-blue-50 via-pink-50 to-card",
  },
  "Cool Summer": {
    name: "Cool Summer",
    keywords: ["Refined", "Cool", "Sophisticated"],
    palette: ["#778899", "#6A5ACD", "#DB7093", "#5F9EA0", "#BC8F8F", "#8B7D7B", "#B0C4DE", "#CDB7B5", "#9FB6CD", "#C1CDCD", "#EEB4B4", "#A2B5CD"],
    avoidColors: ["#FF4500", "#FFD700", "#FF6347"],
    description: "Sophisticated cool tones bring refinement and depth.",
    bgStyle: "from-slate-100 via-card to-blue-50",
  },
  "Soft Autumn": {
    name: "Soft Autumn",
    keywords: ["Warm", "Muted", "Natural"],
    palette: ["#C4A882", "#A0785A", "#8B7355", "#698B69", "#8B7B8B", "#CD9B9B", "#CDBA96", "#9C9C5E", "#8B8378", "#CDC5BF", "#BDB76B", "#BC8F8F"],
    avoidColors: ["#FF1493", "#00BFFF", "#7FFF00"],
    description: "Warm, muted tones from nature create a soft, organic beauty.",
    bgStyle: "from-amber-50 via-card to-green-50",
  },
  "Warm Autumn": {
    name: "Warm Autumn",
    keywords: ["Rich", "Warm", "Earthy"],
    palette: ["#8B4513", "#CD853F", "#DAA520", "#6B8E23", "#A0522D", "#B8860B", "#556B2F", "#8B6914", "#CD6600", "#8B7500", "#698B22", "#8E6B23"],
    avoidColors: ["#FF69B4", "#87CEEB", "#E6E6FA"],
    description: "Rich, earthy warm tones bring out your natural warmth and depth.",
    bgStyle: "from-amber-100 via-card to-orange-50",
  },
  "Dark Autumn": {
    name: "Dark Autumn",
    keywords: ["Deep", "Warm", "Luxe"],
    palette: ["#8B0000", "#8B4513", "#006400", "#4A3728", "#8B6508", "#556B2F", "#8B3626", "#6B4423", "#3B5323", "#8B7355", "#CD6839", "#8B5A2B"],
    avoidColors: ["#E0FFFF", "#F0FFF0", "#FFF0F5"],
    description: "Deep, warm tones create a luxurious, rich appearance.",
    bgStyle: "from-amber-100 via-card to-stone-100",
  },
};

export const getRandomSeason = (): ColorSeason => {
  const keys = Object.keys(COLOR_SEASONS);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return COLOR_SEASONS[randomKey];
};
