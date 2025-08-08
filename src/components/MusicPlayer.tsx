'use client';

import { useState, useEffect } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { Song } from '../types';

const songs: Song[] = [
  { id: 'hodnntAN-Z4', title: 'A Hora é Agora', artist: 'Jorge & Mateus' },
  { id: 'EiIjd3sV5vc', title: 'Voa Beija Flor', artist: 'Jorge & Mateus' },
  { id: 'QlmdC2apFs0', title: 'Aí Já Era (Ao Vivo)', artist: 'Jorge & Mateus' }
];

export default function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [player, setPlayer] = useState<YT.Player | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const currentSong = songs[currentSongIndex];

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0
    },
  };

  const onReady = (event: { target: YT.Player }) => {
    setPlayer(event.target);
    event.target.setVolume(50);
    setIsPlaying(true);
  };

  const onEnd = () => {
    nextSong();
  };

  const onError = () => {
    nextSong();
  };

  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
        setIsPlaying(false);
      } else {
        player.playVideo();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
        setIsMuted(false);
      } else {
        player.mute();
        setIsMuted(true);
      }
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  const prevSong = () => {
    const prevIndex = currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinimized(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-0 h-0 overflow-hidden pointer-events-none">
        <YouTube
          videoId={currentSong.id}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
          onError={onError}
          key={currentSong.id}
        />
      </div>

      <div 
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
          isMinimized ? 'w-12 h-12' : 'w-80'
        }`}
        onMouseEnter={() => setIsMinimized(false)}
        onMouseLeave={() => setIsMinimized(true)}
      >
        <div className="bg-white/90 backdrop-blur-sm border border-rose-200 rounded-xl shadow-lg">
          {!isMinimized ? (
            <div className="p-4">
              <div className="text-center mb-3">
                <h4 className="font-semibold text-rose-800 text-sm truncate">
                  {currentSong.title}
                </h4>
                <p className="text-rose-600 text-xs">
                  {currentSong.artist}
                </p>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <button
                  onClick={prevSong}
                  className="p-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors"
                  aria-label="Música anterior"
                >
                  <SkipBack size={16} />
                </button>

                <button
                  onClick={togglePlay}
                  className="p-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-colors"
                  aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                <button
                  onClick={nextSong}
                  className="p-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors"
                  aria-label="Próxima música"
                >
                  <SkipForward size={16} />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 transition-colors"
                  aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
            </div>
          ) : (
            <div className="w-12 h-12 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-colors"
                aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}