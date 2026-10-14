// usePreloader.js
import { useEffect, useState } from "react";

function loadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    img.src = src;
  });
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));
const noImages: string[] = [];

export function usePreloader(images: string[] = noImages, minTime = 600) {
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failedImages, setFailedImages] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    let completed = 0;
    const total = images.length + 1; // +1 for fonts

    const tick = () => {
      completed += 1;
      if (!cancelled) setTargetProgress(Math.round((completed / total) * 100));
    };

    Promise.all([
      ...images.map(async (src) => {
        try {
          await loadImage(src);
        } catch (error) {
          if (!cancelled) {
            console.error(error);
            setFailedImages((failed) => [...failed, src]);
          }
        } finally {
          tick();
        }
      }),
      document.fonts.ready.then(tick),
      wait(minTime), // avoids an ugly flash if everything is cached
    ]).then(() => {
      if (!cancelled) {
        setTargetProgress(100);
        setLoaded(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [images, minTime]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        return Math.min(current + 1, targetProgress);
      });
    }, 16);

    return () => window.clearInterval(interval);
  }, [loaded, targetProgress]);

  return { progress, done: loaded && progress === 100, failedImages };
}
