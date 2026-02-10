import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, useDragControls } from 'framer-motion';
import './RecentScrobbles.css';

const getTimeAgo = (uts) => {
  const seconds = Math.floor(new Date().getTime() / 1000 - parseInt(uts));
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
};

const RecentScrobbles = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const controls = useDragControls();

  const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
  const USERNAME = 'Eikei';
  
  const URL = useMemo(
    () => `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&limit=6&format=json`,
    [API_KEY]
  );

  const startDrag = useCallback((event) => {
    controls.start(event);
  }, [controls]);

  useEffect(() => {
    if (!API_KEY) {
      console.error("API key is missing. Please set VITE_LASTFM_API_KEY in your environment variables.");
      return;
    }
    
    const fetchTracks = () => {
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          if (data.recenttracks && data.recenttracks.track) {
            setTracks(data.recenttracks.track);
          }
          setLoading(false);
        })
        .catch(err => {
          console.error("Could not fetch data:", err);
          setLoading(false);
        });
    };

    fetchTracks();
    const interval = setInterval(fetchTracks, 30000);
    return () => clearInterval(interval);
  }, [URL, API_KEY]);

  if (loading) return <p className="recent-tracks-loading">Loading music...</p>;

  return (
    <motion.div 
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      className="recent-tracks-container"
    >
      <div 
        className="recent-tracks-header" 
        onPointerDown={startDrag} 
        style={{ cursor: 'grab' }}
      >
        <h3>Recently listened to:</h3>
      </div>

      <ul className="track-list">
        {tracks.map((track, index) => (
          <li key={track.date?.uts || `track-${index}`} className="track-item">
            <img 
              className="album-art"
              src={track.image[2]['#text'] || 'placeholder-bild.png'} 
              alt="Album cover"
              draggable={false}
            />
            <div className="track-info">
              <span className="track-name">{track.name}</span>
              <span className="artist-name">{track.artist['#text']}</span>
              <div className="track-status">
                {track['@attr']?.nowplaying === 'true' ? (
                  <span className="now-playing-badge">LISTENING NOW</span>
                ) : (
                  <span className="time-ago">{track.date ? getTimeAgo(track.date.uts) : ''}</span>
                )}
              </div>
            </div>
          </li>
        ))}
        <div className="lastfm-link">
          <a href={`https://www.last.fm/api#getting-started`} target="_blank" rel="noopener noreferrer">
            Powered by <img 
              src="../img/lastfm.png" 
              alt="Last.fm logo" 
              className="lastfm-logo"
              draggable={false}
            />
          </a>
        </div>
      </ul>
    </motion.div>
  );
};

export default RecentScrobbles;