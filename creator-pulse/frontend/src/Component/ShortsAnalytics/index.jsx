import React, { useState } from "react";
import "./style.css";

const API_KEY = "AIzaSyB9F1gROqetXScoAf1vFKBNokz4mVTixU4";

const extractVideoID = (text) => {
  if (!text) return null;
  if (text.includes("youtube.com/shorts/"))
    return text.split("shorts/")[1].split("?")[0];
  return null;
};

const getSeconds = (iso) => {
  const h = iso.match(/(\d+)H/)?.[1] || 0;
  const m = iso.match(/(\d+)M/)?.[1] || 0;
  const s = iso.match(/(\d+)S/)?.[1] || 0;
  return h * 3600 + m * 60 + Number(s);
};

const formatDuration = (sec) =>
  sec < 60 ? `${sec}s` : `${Math.floor(sec / 60)}m ${sec % 60}s`;

export default function ShortsAnalytics() {
  const [url, setUrl] = useState("");
  const [video, setVideo] = useState(null);
  const [audience, setAudience] = useState("");
  const [swipe, setSwipe] = useState("");
  const [result, setResult] = useState("");
  const [watchTime, setWatchTime] = useState("");
  const [error, setError] = useState("");

  const fetchVideo = async () => {
    const id = extractVideoID(url);

    if (!id) {
      setError("❌ Please enter a valid YouTube Shorts link only.");
      return;
    }

    setError("");

    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${id}&key=${API_KEY}`
      );
      const data = await res.json();

      if (!data.items?.length) {
        setError("Video not found.");
        return;
      }

      setVideo(data.items[0]);
    } catch {
      setError("Failed to fetch video data.");
    }
  };

  const analyze = async () => {
    if (!audience || !swipe) {
      alert("Enter both Audience Retention and Swipe Away percentage.");
      return;
    }

    if (audience < 1 || audience > 100 || swipe < 1 || swipe > 100) {
      alert("Values must be between 1 and 100.");
      return;
    }

    const duration = getSeconds(video.contentDetails.duration);
    const watchTime = Math.round((duration * audience) / 100);
    setWatchTime(formatDuration(watchTime));

    try {
      const res = await fetch("http://localhost:8080/analysis/short", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ar: Number(audience),
          sa: Number(swipe),
        }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch {
      setResult("Server error occurred");
    }
  };

  return (
    <div className="shorts-analytics-wrapper">
      <div className="input-row">
        <input
          className="video-input"
          placeholder="Paste YouTube Shorts link only"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt="thumbnail"
          />

          <h2>{video.snippet.title}</h2>

          <div className="stats">
            <span>👁 {video.statistics.viewCount}</span>
            <span>👍 {video.statistics.likeCount}</span>
            <span>⏱ {formatDuration(getSeconds(video.contentDetails.duration))}</span>
          </div>

          <div className="analysis-inputs">
            <input className="input-video"
              type="number"
              placeholder="Audience Retention (%)"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            />

            <input className="input-video"
              type="number"
              placeholder="Swiped Away (%)"
              value={swipe}
              onChange={(e) => setSwipe(e.target.value)}
            />
          </div>

          <button className="fetch-btn" onClick={analyze}>
            Analyze Performance
          </button>

          {watchTime && (
  <div className="result-container">
    <h3 className="result-title">📊 Analysis Result</h3>

    <div className="result-box">
      <p>
        ⏱ <strong>Watch Time:</strong> {watchTime}
      </p>
      <p>
        📈 <strong>Performance:</strong> {result}
      </p>
    </div>
  </div>
)}
        </div>
      )}
    </div>
  );
}
