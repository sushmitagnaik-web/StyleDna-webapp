import { useState } from "react";
import Landing from "@/components/screens/Landing";
import FaceScan from "@/components/screens/FaceScan";
import UploadPhoto from "@/components/screens/UploadPhoto";
import AnalysisAnimation from "@/components/screens/AnalysisAnimation";
import ColorResult from "@/components/screens/ColorResult";
import OutfitBuilder from "@/components/screens/OutfitBuilder";
import OutfitResults from "@/components/screens/OutfitResults";
import { ColorSeason, getRandomSeason } from "@/data/colorSeasons";

export type Screen = "landing" | "scan" | "upload" | "analyzing" | "result" | "builder" | "outfits";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [season, setSeason] = useState<ColorSeason | null>(null);
  const [gender, setGender] = useState("");
  const [occasion, setOccasion] = useState("");
  const [regenerateKey, setRegenerateKey] = useState(0);

  const handlePhotoReady = (url: string) => {
    setPhotoUrl(url);
    setScreen("analyzing");

    // Local analysis — assign a color season based on the photo
    setTimeout(() => {
      setSeason(getRandomSeason());
      setScreen("result");
    }, 2500);
  };

  const handleBuildOutfit = () => setScreen("builder");

  const handleGenerateOutfits = (g: string, o: string) => {
    setGender(g);
    setOccasion(o);
    setRegenerateKey((k) => k + 1);
    setScreen("outfits");
  };

  const handleRegenerate = () => {
    setRegenerateKey((k) => k + 1);
  };

  const handleRestart = () => {
    setScreen("landing");
    setPhotoUrl(null);
    setSeason(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {screen === "landing" && <Landing onScan={() => setScreen("scan")} onUpload={() => setScreen("upload")} />}
      {screen === "scan" && <FaceScan onPhotoReady={handlePhotoReady} onBack={() => setScreen("landing")} />}
      {screen === "upload" && <UploadPhoto onPhotoReady={handlePhotoReady} onBack={() => setScreen("landing")} />}
      {screen === "analyzing" && <AnalysisAnimation />}
      {screen === "result" && season && <ColorResult season={season} onBuildOutfit={handleBuildOutfit} onBack={handleRestart} />}
      {screen === "builder" && <OutfitBuilder onGenerate={handleGenerateOutfits} onBack={() => setScreen("result")} />}
      {screen === "outfits" && (
        <OutfitResults
          key={regenerateKey}
          gender={gender}
          occasion={occasion}
          palette={season?.palette || []}
          seasonName={season?.name || ""}
          onRegenerate={handleRegenerate}
          onRestart={handleRestart}
          onBack={() => setScreen("builder")}
        />
      )}
    </div>
  );
};

export default Index;
