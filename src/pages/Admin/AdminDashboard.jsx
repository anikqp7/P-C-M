import React from 'react';
import './css/AdminDashboard.css'; 
import { Users, PlusCircle, Activity, ShieldAlert, Edit3, Trash2, Eye, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const clubs = [
    { id: 1, name: 'Programming Club', members: 120, status: 'Active', code: 'SYS_PRG_01' },
    { id: 2, name: 'Robotics Club', members: 85, status: 'Active', code: 'SYS_ROB_02' },
    { id: 3, name: 'Debating Club', members: 60, status: 'Active', code: 'SYS_DEB_03' },
  ];

  return (
    <div className="admin-root">
  
      
      <div className="admin-container">
        <header className="admin-header">
          <div className="header-text">
            <h2 className="cyber-title">ADMIN-DASHBOARD</h2>
            <p className="system-status">System Status: <span className="pulse-text">ACTIVE</span></p>
          </div>
          <button className="create-btn">
            <PlusCircle size={18} /> CREATE-NEW-ENTITY
          </button>
        </header>

        {/* Stats Grid */}
        <div className="stats-container">
          <div className="stat-card">
            <Activity className="icon-blue" />
            <div className="stat-data">
              <h3>03</h3>
              <p>TOTAL_CLUBS</p>
            </div>
          </div>
          <div className="stat-card">
            <Users className="icon-blue" />
            <div className="stat-data">
              <h3>265</h3>
              <p>TOTAL_MEMBERS</p>
            </div>
          </div>
          <div className="stat-card alert-card">
            <ShieldAlert className="icon-red" />
            <div className="stat-data">
              <h3 className="text-red">12</h3>
              <p>PENDING_REQUESTS</p>
            </div>
          </div>
        </div>

        <h3 className="sub-section-title">
          <Settings size={18} /> CLUB_MANAGEMENT_DATABASE
        </h3>

        {/* Club Cards Grid */}
        <div className="admin-cards-grid">
          {clubs.map(club => (
            <div key={club.id} className="admin-cyber-card">
              <div className="card-scanner"></div>
              <div className="card-header-info">
                <span className="id-tag">{club.code}</span>
                <span className="status-indicator"></span>
              </div>
              
              <h4>{club.name}</h4>
              <div className="info-row">
                <span>DATABASE_MEMBERS:</span>
                <span className="val">{club.members}</span>
              </div>

              <div className="admin-btn-group">
                <button className="btn-icon edit-btn" title="Edit Entity"><Edit3 size={16} /></button>
                <button className="btn-icon view-btn" title="View Logs"><Eye size={16} /></button>
                <button className="btn-icon delete-btn" title="Terminate"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;