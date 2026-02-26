import React from 'react';
import './css/MyClubs.css';

const MyClubs = () => {
  const myClubs = [
    { name: "Programming Club", joinedDate: "2024-01-15", position: "General Member" }
  ];

  return (
    <div className="cyber-home my-clubs-page">
      <div className="grid-overlay"></div>
      <div className="glow-sphere"></div>

      <div className="hero-content">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-text">status=accessing_enrolled_nodes</span>
        </div>

        <h1 className="hero-title">
          MY ENROLLED <span className="text-glow">CLUBS</span>
        </h1>
        
        <p className="hero-subtitle">
          Your active memberships in the central cluster. <br />
          <span className="highlight">Connected to verified department units</span>.
        </p>

        <div className="clubs-list-container">
          {myClubs.length > 0 ? (
            myClubs.map((club, index) => (
              <div key={index} className="enrolled-card">
                <div className="card-accent-line"></div>
                <div className="enrolled-info">
                  <h3 className="enrolled-name">{club.name}</h3>
                  <div className="role-badge">{club.position}</div>
                  <p className="joined-date">
                    <span className="label">MEMBER_SINCE:</span> {club.joinedDate}
                  </p>
                </div>
                <div className="access-status">ACTIVE_NODE</div>
              </div>
            ))
          ) : (
            <div className="empty-message">
              <p>NO_ENROLLED_CLUBS_FOUND</p>
              <small>Initialize join protocol from the dashboard.</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyClubs;