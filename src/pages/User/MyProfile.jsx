import React from 'react';
import './css/MyProfile.css';

const MyProfile = () => {
  // ডামি ইউজার ডাটা (পরে ব্যাকেন্ড থেকে আসবে)
  const userData = {
    name: "Tanvir Ahmed",
    studentId: "2021000123",
    email: "tanvir.stu@university.edu",
    joinedClubs: 3,
    status: "Active Student",
    rank: "Node_User_01"
  };

  return (
    <div className="cyber-home profile-page">
      <div className="grid-overlay"></div>
      <div className="glow-sphere"></div>

      <div className="hero-content">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-text">identity_auth=success</span>
        </div>

        <h1 className="hero-title">
          MY <span className="text-glow">PROFILE</span>
        </h1>

        <div className="profile-wrapper">
          {/* প্রোফাইল কার্ডের বাম পাশ (Avatar & Basic Info) */}
          <div className="profile-card-left">
            <div className="avatar-frame">
              <div className="avatar-placeholder">
                {userData.name.charAt(0)}
              </div>
              <div className="online-indicator"></div>
            </div>
            <h2 className="user-display-name">{userData.name}</h2>
            <p className="user-rank">{userData.rank}</p>
          </div>

          {/* প্রোফাইল কার্ডের ডান পাশ (Details) */}
          <div className="profile-details-right">
            <div className="info-grid">
              <div className="info-item">
                <label>STUDENT_ID</label>
                <p>{userData.studentId}</p>
              </div>
              <div className="info-item">
                <label>EMAIL_ADDRESS</label>
                <p>{userData.email}</p>
              </div>
              <div className="info-item">
                <label>ACCOUNT_STATUS</label>
                <p className="status-text">{userData.status}</p>
              </div>
              <div className="info-item">
                <label>CLUBS_ENROLLED</label>
                <p>{userData.joinedClubs}</p>
              </div>
            </div>
            
            <button className="edit-profile-btn">UPDATE_IDENTITY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;