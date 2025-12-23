import React, { useEffect, useState } from "react";
import "./style.css";

const API_KEY = "AIzaSyB9F1gROqetXScoAf1vFKBNokz4mVTixU4";

const extractVideoID = (text) => {
  if (!text) return null;
  text = text.trim();

  if (text.length === 11) return text;
  if (text.includes("/shorts/"))
    return text.split("/shorts/")[1].substring(0, 11);
  if (text.includes("v="))
    return text.split("v=")[1].substring(0, 11);
  if (text.includes("youtu.be/"))
    return text.split("youtu.be/")[1].substring(0, 11);

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
  const [videoId, setVideoId] = useState("");
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showFullDesc, setShowFullDesc] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem("shortsAnalyticsDB");
  if (saved) {
    const data = JSON.parse(saved);
    setUrlInput(data.videoId);
    setVideoId(data.videoId);
    setVideo(data.video);
  }
}, []);


  useEffect(() => {
    if (!videoId) return;

    setLoading(true);
    setError("");
    setShowFullDesc(false);

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items?.length > 0) {
          const v = data.items[0];
          setVideo(v);

localStorage.setItem(
  "shortsAnalyticsDB",
  JSON.stringify({ videoId, video: v })
);

        } else {
          setError("No Shorts video found");
        }
      })
      .catch(() => setError("Failed to fetch Shorts data"))
      .finally(() => setLoading(false));
  }, [videoId]);

  const handleFetch = () => {
    const id = extractVideoID(urlInput);
    if (!id) {
      setError("Please enter a valid YouTube Shorts link or ID");
      return;
    }
    setVideoId(id);
  };

  return (
    <div className="shorts-analytics-wrapper">
      <div className="input-row">
        <input
          className="video-input"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleFetch()}
          placeholder="Paste YouTube Shorts link or ID"
        />
        <button className="fetch-btn" onClick={handleFetch}>
          Fetch
        </button>
      </div>

      {error && <p className="error">{error}</p>}
      {loading && <p>Loading...</p>}

      {!video && !loading && !error && (
        <p className="empty-note">
          Enter YouTube Shorts link and click Fetch
        </p>
      )}

      {video && (
        <div className="video-card">
         
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Shorts Thumbnail"
            className="thumbnail"
          />

          <h2>{video.snippet.title}</h2>

          <p
            className={`desc ${
              !showFullDesc && video.snippet.description.length > 240
                ? "collapsed"
                : ""
            }`}
          >
            {showFullDesc
              ? video.snippet.description
              : video.snippet.description.slice(0, 240)}
          </p>

          {video.snippet.description.length > 240 && (
            <button
              className="desc-toggle"
              onClick={() => setShowFullDesc(!showFullDesc)}
            >
              {showFullDesc ? "Show less" : "Show more"}
            </button>
          )}

          <div className="stats">
            <span>
              👁 Views:{" "}
              {Number(video.statistics.viewCount).toLocaleString()}
            </span>
            <span>
              👍 Likes:{" "}
              {video.statistics.likeCount
                ? Number(video.statistics.likeCount).toLocaleString()
                : "N/A"}
            </span>
            <span>
              ⏱ Duration:{" "}
              {formatDuration(getSeconds(video.contentDetails.duration))}
            </span>
          </div>

          <div className="actions">
            <button
              className="link-btn"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/shorts/${videoId}`,
                  "_blank"
                )
              }
            >
              Open Shorts
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortsAnalytics;
