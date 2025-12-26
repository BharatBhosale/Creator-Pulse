import React, { useState } from "react";
import "./style.css";

const API_KEY = "AIzaSyB9F1gROqetXScoAf1vFKBNokz4mVTixU4";

const extractVideoID = (text) => {
  if (!text) return null;
  text = text.trim();

  if (text.length === 11) return text;
  if (text.includes("v=")) return text.split("v=")[1].substring(0, 11);
  if (text.includes("youtu.be/")) return text.split("youtu.be/")[1].substring(0, 11);

  return null;
};

const getSeconds = (iso) => {
  const h = iso.match(/(\d+)H/)?.[1] || 0;
  const m = iso.match(/(\d+)M/)?.[1] || 0;
  const s = iso.match(/(\d+)S/)?.[1] || 0;
  return h * 3600 + m * 60 + Number(s);
};

const formatDuration = (sec) => {
  if (sec < 60) return `${sec}s`;
  return `${Math.floor(sec / 60)}m ${sec % 60}s`;
};

const ShortsAnalytics = () => {
  const [urlInput, setUrlInput] = useState("");
  const [video, setVideo] = useState(null);
  const [ctr, setCtr] = useState("");
  const [ar, setAr] = useState("");
  const [result, setResult] = useState("");
  const [watchTime, setWatchTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVideo = async () => {
    const id = extractVideoID(urlInput);
    if (!id) {
      setError("Invalid YouTube link or ID");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${id}&key=${API_KEY}`
      );
      const data = await res.json();

      if (!data.items || !data.items.length) {
        setError("Video not found");
        return;
      }

      setVideo(data.items[0]);
    } catch {
      setError("Failed to load video");
    } finally {
      setLoading(false);
    }
  };

  const analyzeVideo = async () => {
    if (!ctr || !ar) {
      alert("Enter CTR and Audience Retention");
      return;
    }

    if (ar < 1 || ar > 100 || ctr < 1 || ctr > 100) {
      alert("CTR and Audience Retention must be between 1 and 100");
      return;
    }

    const duration = getSeconds(video.contentDetails.duration);
    const watchedSeconds = Math.round((duration * ar) / 100);
    setWatchTime(formatDuration(watchedSeconds));

    try {
      const res = await fetch("http://localhost:8080/analysis/video", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ctr: Number(ctr),
          ar: Number(ar),
        }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch {
      setResult("Backend error");
    }
  };

  return (
    <div className="video-analytics-wrapperr">
      <div className="input-row">
        <input
          className="video-input"
          placeholder="Paste YouTube link or ID"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />
        <button className="fetch-btn" onClick={fetchVideo}>
          Analyze Now
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {video && (
        <div className="video-card">
          <img
            className="thumbnail"
            src={video.snippet.thumbnails.high.url}
            alt="thumbnail"
          />

          <h2>{video.snippet.title}</h2>

          <div className="stats">
            <span>👁 {video.statistics.viewCount} Views</span>
            <span>⏱ {formatDuration(getSeconds(video.contentDetails.duration))}</span>
          </div>

          {/* USER INPUT */}
          <div className="stats">
            <input className="input-video"
              type="number"
              placeholder="CTR %"
              value={ctr}
              onChange={(e) => setCtr(e.target.value)}
            />
            <input className="input-video"
              type="number"
              placeholder="Audience Retention %"
              value={ar}
              onChange={(e) => setAr(e.target.value)}
            />
          </div>

          <button className="fetch-btn" onClick={analyzeVideo}>
            Analyze Performance
          </button>

          {/* RESULTS */}
          {(watchTime || result) && (
  <div className="result-box-video">
    <h3 className="result-title-video">📊 Analysis Result</h3>

    {watchTime && (
      <p className="result-item-video">
        ⏱ Estimated Watch Time: <b>{watchTime}</b>
      </p>
    )}

    {result && (
      <p className="result-item-video">
        📈 Performance Status: <b>{result}</b>
      </p>
    )}
  </div>
)}

        </div>
      )}
    </div>
  );
};

export default ShortsAnalytics;
