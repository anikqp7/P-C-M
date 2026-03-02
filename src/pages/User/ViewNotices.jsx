import React from 'react';
import './css/ViewNotices.css';

const ViewNotices = () => {
  // Dami notice data
  const notices = [
    { id: 1, title: "Programming Contest 2024", date: "2024-05-20", dept: "CPC" },
    { id: 2, title: "Robotics Workshop Registration", date: "2024-05-22", dept: "Robotics" },
    { id: 3, title: "Debate Competition Selection", date: "2024-05-25", dept: "Debate" }
  ];

  return (
    <div className="cyber-home notices-view-page">
      <div className="grid-overlay"></div>
      <div className="glow-sphere"></div>

      <div className="hero-content">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-text">status=active</span>
        </div>

        <h1 className="hero-title">
          NOTICE <span className="text-glow">BOARD</span>
        </h1>
        
        <p className="hero-subtitle">
          Streaming active broadcasts from the central node. <br />
          <span className="highlight">Stay updated with department-wide events</span>.
        </p>

        <div className="notices-list-wrapper">
          {notices.map(notice => (
            <div key={notice.id} className="notice-item-card">
              <div className="notice-scanner-line"></div>
              <div className="notice-main-info">
                <h4 className="notice-item-title">{notice.title}</h4>
                <div className="notice-meta-data">
                  <span className="notice-dept-tag">CLUB-{notice.dept}</span>
                  <span className="notice-post-date">POSTED ON: {notice.date}</span>
                </div>
              </div>
              <div className="view-detail-btn">VIEW</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewNotices;