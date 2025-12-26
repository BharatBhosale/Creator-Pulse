import React, { useState } from "react";
import "./style.css";

const API_KEY = "AIzaSyB9F1gROqetXScoAf1vFKBNokz4mVTixU4";

const extractVideoID = (text) => {
  if (!text) return null;
  text = text.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(text)) return text;

  try {
    const url = new URL(text);

    if (url.searchParams.get("v")) {
      return url.searchParams.get("v");
    }

    if (url.hostname.includes("youtu.be")) {
      return url.pathname.slice(1);
    }

    if (url.pathname.includes("/shorts/")) {
      return url.pathname.split("/shorts/")[1];
    }
  } catch (e) {
    return null;
  }

  return null;
};

const TagGenerator = () => {
  const [input, setInput] = useState("");
  const [video, setVideo] = useState(null);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVideoTags = () => {
    const videoId = extractVideoID(input);

    if (!videoId) {
      setError("Please enter a valid YouTube link or ID");
      return;
    }

    setLoading(true);
    setError("");
    setVideo(null);
    setTags([]);

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const videoData = data.items[0];
          setVideo(videoData);
          setTags(videoData.snippet.tags || []);
        } else {
          setError("No video found");
        }
      })
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="video-analytics-wrapper">
      <h2 className="tag-name">YouTube SEO Tags</h2>

      <div className="input-row">
        <input
          className="video-input"
          placeholder="Paste YouTube link or video ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchVideoTags()}
        />
        <button className="fetch-btn" onClick={fetchVideoTags}>
          Get Video Tags
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {video && (
        <div className="video-card">
          <h3>{video.snippet.title}</h3>

          {tags.length > 0 ? (
            <div className="tags">
              <strong>Tags:</strong>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag"
                  onClick={() => navigator.clipboard.writeText(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : (
            <p className="empty-note">No tags available for this video</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TagGenerator;
