import { useState, useRef } from "react";
import { ArrowLeft, ImagePlus, RotateCcw, Check } from "lucide-react";

interface UploadPhotoProps {
  onPhotoReady: (url: string) => void;
  onBack: () => void;
}

const UploadPhoto = ({ onPhotoReady, onBack }: UploadPhotoProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.match(/image\/(jpeg|png|webp)/)) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = 1024;
        let w = img.width, h = img.height;
        if (w > maxSize || h > maxSize) {
          if (w > h) { h = (h / w) * maxSize; w = maxSize; }
          else { w = (w / h) * maxSize; h = maxSize; }
        }
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d")?.drawImage(img, 0, 0, w, h);
        setPreview(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground font-ui text-sm hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <h2 className="font-heading text-2xl mb-6">
          {preview ? "Perfect shot!" : "Upload your photo"}
        </h2>

        {preview ? (
          <>
            <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-elevated mb-8 border border-border">
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3 w-full max-w-sm">
              <button
                onClick={() => { setPreview(null); inputRef.current?.click(); }}
                className="flex-1 py-3.5 rounded-2xl border border-border font-ui font-semibold text-foreground hover:bg-muted transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Choose another
              </button>
              <button
                onClick={() => onPhotoReady(preview)}
                className="flex-1 py-3.5 rounded-2xl bg-primary font-ui font-semibold text-primary-foreground hover:shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" /> Use this photo
              </button>
            </div>
          </>
        ) : (
          <button
            onClick={() => inputRef.current?.click()}
            className="glass-card-strong w-72 h-72 flex flex-col items-center justify-center gap-4 cursor-pointer hover:shadow-elevated transition-all hover:-translate-y-1 group"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/30 flex items-center justify-center group-hover:bg-secondary/50 transition-colors">
              <ImagePlus className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="font-ui font-semibold text-foreground">Tap to upload</p>
              <p className="text-sm text-muted-foreground font-body mt-1">JPG, PNG, or WEBP</p>
            </div>
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default UploadPhoto;
