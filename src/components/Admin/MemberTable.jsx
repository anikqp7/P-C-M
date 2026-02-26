import React from 'react';
import { CheckCircle, XCircle, Terminal } from 'lucide-react';

const MemberTable = ({ requests, onAction }) => {
  return (
    <div className="cyber-table-container">
      <table className="cyber-table">
        <thead>
          <tr>
            <th><Terminal size={14} /> ID</th>
            <th>NAME</th>
            <th>BATCH</th>
            <th>CLUB_REQUESTED</th>
            <th>ACTION_PROTOCOL</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td className="id-col">{req.studentId}</td>
              <td className="name-col">{req.name}</td>
              <td className="batch-col">{req.batch}</td>
              <td className="club-col">
                <span className="club-tag">{req.club}</span>
              </td>
              <td className="action-col">
                <button 
                  className="auth-btn approve" 
                  onClick={() => onAction(req.id, 'approve')}
                >
                  <CheckCircle size={16} /> APPROVE
                </button>
                <button 
                  className="auth-btn reject" 
                  onClick={() => onAction(req.id, 'reject')}
                >
                  <XCircle size={16} /> REJECT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTable;