import React, { useState } from "react";
import "./style.css";

const blogs = [
  {
    title: "How YouTube Algorithm Works",
    image: "/Image/youtube-image3.jpg",
    content:
      "YouTube’s algorithm focuses on promoting videos that keep viewers watching for longer periods of time. It mainly looks at watch time, audience retention, and engagement such as likes, comments, and shares. When viewers stay engaged, watch a large portion of the video, and interact with it, YouTube understands that the content is valuable and pushes it to more people through recommendations and search results. Creating strong hooks at the beginning, maintaining viewer interest throughout the video, and using clear thumbnails and titles can significantly improve visibility and growth on the platform.",
  },
  {
    title: "What is CTR & Why It Matters",
    image: "/Image/youtube-image4.png",
    content:
      "CTR (Click-Through Rate) measures how often viewers click on your video after seeing its thumbnail and title. It is one of the most important factors in determining how well your content performs on YouTube. A higher CTR means your title and thumbnail are attractive and successfully grab attention, encouraging users to watch your video. When your CTR is strong, YouTube is more likely to recommend your content to a wider audience, helping your channel grow faster.",
  },
  {
    title: "Audience Retention Explained",
    image: "/Image/youtube-image5.png",
    content:
      "Audience retention shows how long viewers continue watching your video from start to finish. It is one of the most important signals YouTube uses to decide whether to promote your content. When viewers stay engaged for a longer time, it tells the algorithm that your video is valuable and interesting. Higher audience retention increases the chances of your video appearing in recommendations, search results, and suggested videos, helping your channel grow faster.",
  },
  {
    title: "Grow Faster With YouTube Shorts",
    image: "/Image/youtube-image2.jpg",
    content:
      "YouTube Shorts grow fastest when they capture attention immediately. The first 2–3 seconds are critical, as viewers decide very quickly whether to keep watching or scroll away. Using strong hooks, eye-catching visuals, bold text, and trending sounds helps stop users from scrolling. Shorts that deliver value quickly, stay under 30 seconds, and maintain fast pacing tend to perform better. Consistency, creativity, and understanding current trends play a major role in maximizing reach and increasing visibility on the Shorts feed.",
  },
  {
    title: "Understanding YouTube Analytics",
    image: "/Image/youtube-image3.jpg",
    content:
      "Understanding YouTube Analytics is essential for improving your content and growing your channel. Analytics provide detailed insights into how viewers interact with your videos, including watch time, audience retention, traffic sources, and engagement levels. By analyzing this data, creators can understand what type of content performs best, identify where viewers lose interest, and make informed decisions to improve future videos. Using analytics regularly helps you optimize content strategy, increase visibility, and grow your audience more effectively.",
  },
];

const Blogs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBlog = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="blog-page">
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} />

            <h3>{blog.title}</h3>

            <p className="blog-text">
              {expandedIndex === index
                ? blog.content
                : blog.content.slice(0, 90) + "..."}
            </p>

            <button className="read-btn" onClick={() => toggleBlog(index)}>
              {expandedIndex === index ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
