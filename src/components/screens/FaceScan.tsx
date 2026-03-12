import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowLeft, RotateCcw, Check } from "lucide-react";

interface FaceScanProps {
  onPhotoReady: (url: string) => void;
  onBack: () => void;
}

const FaceScan = ({ onPhotoReady, onBack }: FaceScanProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [captured, setCaptured] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [cameraError, setCameraError] = useState(false);

  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: 640, height: 640 },
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      // Start countdown
      setCountdown(3);
    } catch {
      setCameraError(true);
    }
  }, []);

  useEffect(() => {
    startCamera();
    return () => {
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      capturePhoto();
      return;
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 640;
    canvas.height = 640;
    ctx.drawImage(videoRef.current, 0, 0, 640, 640);
    const url = canvas.toDataURL("image/jpeg", 0.8);
    setCaptured(url);
    stream?.getTracks().forEach((t) => t.stop());
  };

  const retake = () => {
    setCaptured(null);
    setCountdown(null);
    startCamera();
  };

  if (cameraError) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <div className="glass-card-strong p-8 text-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📷</span>
          </div>
          <h2 className="font-heading text-xl mb-2">Camera Access Denied</h2>
          <p className="text-muted-foreground text-sm mb-6 font-body">
            Please enable camera access in your browser settings, or upload a photo instead.
          </p>
          <button
            onClick={onBack}
            className="w-full py-3 rounded-2xl bg-primary font-ui font-semibold text-primary-foreground hover:shadow-glow transition-all"
          >
            Go Back & Upload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4">
        <button onClick={onBack} className="flex items-center gap-2 text-muted-foreground font-ui text-sm hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-12">
        <h2 className="font-heading text-2xl mb-6">
          {captured ? "Looking great!" : "Center your face"}
        </h2>

        <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-elevated mb-8">
          {captured ? (
            <img src={captured} alt="Captured" className="w-full h-full object-cover" />
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover scale-x-[-1]"
              />
              {countdown !== null && countdown > 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                  <span className="text-6xl font-heading font-bold text-card animate-pulse-soft">
                    {countdown}
                  </span>
                </div>
              )}
            </>
          )}
        </div>

        <canvas ref={canvasRef} className="hidden" />

        {captured ? (
          <div className="flex gap-3 w-full max-w-sm">
            <button
              onClick={retake}
              className="flex-1 py-3.5 rounded-2xl border border-border font-ui font-semibold text-foreground hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Retake
            </button>
            <button
              onClick={() => onPhotoReady(captured)}
              className="flex-1 py-3.5 rounded-2xl bg-primary font-ui font-semibold text-primary-foreground hover:shadow-glow transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" /> Continue
            </button>
          </div>
        ) : (
          <p className="text-muted-foreground text-sm font-body animate-pulse-soft">
            Auto-capturing in {countdown ?? "..."}s
          </p>
        )}
      </div>
    </div>
  );
};

export default FaceScan;
