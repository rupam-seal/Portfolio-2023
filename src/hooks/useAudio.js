import { useState } from 'react';

const useAudio = (url) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElement = typeof window !== 'undefined' ? new Audio(url) : null;

  const play = () => {
    setIsPlaying(true);
    if (audioElement.readyState === 4) {
      audioElement.currentTime = 0;
      audioElement.play();
    } else {
      audioElement.addEventListener('canplaythrough', () => {
        audioElement.currentTime = 0;
        audioElement.play();
      });
    }
  };

  const pause = () => {
    setIsPlaying(false);
    audioElement.pause();
  };

  return { isPlaying, play, pause };
};

export default useAudio;
