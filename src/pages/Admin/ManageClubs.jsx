import React from 'react';
import './css/ManageClubs.css';
import { Edit, Power, Plus, ShieldCheck, Terminal } from 'lucide-react';

const ManageClubs = () => {
  const clubs = [
    { name: "Programming Club", id: "PRG_01" },
    { name: "Robotics Club", id: "ROB_02" },
    { name: "Debating Club", id: "DEB_03" }
  ];

  return (
    <div className="manage-root">
      <div className="cyber-grid"></div>
      
      <div className="manage-container">
        <div className="header-box">
          <Terminal size={20} className="header-icon" />
          <h2 className="glow-title">MANAGE_CLUBS_INTERFACE</h2>
          <p className="sub-text">System Path: /root/admin/clubs</p>
        </div>

        <div className="club-list-wrapper">
          {clubs.map((club, index) => (
            <div key={index} className="manage-club-card">
              <div className="club-info-side">
                <span className="index-tag">[{index + 1}]</span>
                <div className="club-meta">
                  <span className="club-name-text">{club.name}</span>
                  <span className="club-id-tag">ID: {club.id}</span>
                </div>
              </div>

              <div className="action-side">
                <button className="manage-btn edit-info">
                  <Edit size={16} /> <span>EDIT_INFO</span>
                </button>
                <button className="manage-btn deactivate">
                  <Power size={16} /> <span>DEACTIVATE</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-actions">
          <button className="add-club-btn">
            <Plus size={20} /> ADD_NEW_ENTITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageClubs;