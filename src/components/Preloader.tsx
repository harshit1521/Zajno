type PreloaderProps = {
  progress: number;
  hidden: boolean;
  failedImages: string[];
};

export default function Preloader({ progress, hidden, failedImages }: PreloaderProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-[#f5f5f5]  text-[#1a1a1a] transition-opacity duration-700
        ${hidden ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <p role="status" aria-live="polite" className="text-3xl font-medium tabular-nums">
        {progress}
      </p>
      {failedImages.length > 0 && (
        <p role="alert" className="mt-4 max-w-xl text-center text-sm">
          Could not load: {failedImages.join(", ")}
        </p>
      )}
    </div>
  );
}