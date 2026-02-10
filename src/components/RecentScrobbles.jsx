import React, { useEffect, useState } from 'react';
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
  const [isExpanded, setIsExpanded] = useState(false);

  const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
  const USERNAME = 'Eikei';
  const URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&limit=6&format=json`;

  useEffect(() => {
    if (!API_KEY) {
      console.error("API-nyckel saknas! Kolla din .env-fil eller Netlify-inställningar.");
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
  }, [URL]);

  if (loading) return <p className="recent-tracks-loading">Loading music...</p>;

  return (
    <div className={`recent-tracks-container ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}>
      <div className="recent-tracks-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3>Recently listened to:</h3>
        <button className="toggle-button">
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {isExpanded && (
        <ul className="track-list">
          {tracks.map((track, index) => (
            <li key={index} className="track-item">
              <img 
                className="album-art"
                src={track.image[2]['#text'] || 'placeholder-bild.png'} 
                alt="Album cover" 
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
        </ul>
      )}
    </div>
  );
};

export default RecentScrobbles;