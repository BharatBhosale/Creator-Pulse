import "./style.css";

const MainSection = () => {
  return (
    <section className="main-wrapper">

      <div className="hero-header">
        <h1>Grow Your Channel Like Never Before</h1>
        <p>Powerful tools and insights to skyrocket your YouTube success</p>
      </div>

      <div className="info-card">
        <div className="card-text">
          <div className="icon red">👁</div>
          <h2>Increase Views</h2>
          <p>
            Discover what makes videos go viral and apply proven strategies
            to increase your view count exponentially.
          </p>
          <button className="pill-btn">10x Growth</button>
        </div>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868" />
        </div>
      </div>

      <div className="info-card reverse">
        <div className="card-text">
          <div className="icon red">⚡</div>
          <h2>Optimize Performance</h2>
          <p>
            Get real-time analytics and actionable insights to continuously
            improve your content strategy.
          </p>
          <button className="pill-btn">2x Watch Time</button>
        </div>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68" />
        </div>
      </div>

      <div className="info-card">
        <div className="card-text">
          <div className="icon red">🎯</div>
          <h2>Reach Your Audience</h2>
          <p>
            Target the right viewers with data-driven insights and expand
            your channel's reach globally.
          </p>
          <button className="pill-btn">3x Subscribers</button>
        </div>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
        </div>
      </div>

      
      <div className="info-card reverse">
        <div className="card-text">
          <div className="icon red">📊</div>
          <h2>Analyze Content</h2>
          <p>
            Understand what content performs best and double down on winning
            strategies.
          </p>
          <button className="pill-btn">Smart Insights</button>
        </div>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />
        </div>
      </div>

      <div className="info-card">
        <div className="card-text">
          <div className="icon red">📈</div>
          <h2>Boost Engagement</h2>
          <p>
            Learn how to create content that resonates with your audience and
            drives meaningful interactions.
          </p>
          <button className="pill-btn">5x More Likes</button>
        </div>
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1556155092-8707de31f9c4" />
        </div>
      </div>

    </section>
  );
};

export default MainSection;
