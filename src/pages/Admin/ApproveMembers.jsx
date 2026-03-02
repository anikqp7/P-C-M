import { useState } from 'react';
import MemberTable from '../../components/Admin/MemberTable';
import './css/ApproveMembers.css';
import { ShieldCheck, Terminal } from 'lucide-react';

const ApproveMembers = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: "Asrafia Khatun", club: "Programming Club", batch: "21", studentId: "CSE-2101" },
    { id: 2, name: "Asfarul Habib Anik", club: "Robotics Club", batch: "20", studentId: "CSE-2005" },
        { id: 3, name: "Asfarul Habib Anik", club: "Robotics Club", batch: "20", studentId: "CSE-2005" },
            { id: 4, name: "Asfarul Habib Anik", club: "Robotics Club", batch: "20", studentId: "CSE-2005" },
    { id: 5, name: "Asfarul Habib Anik", club: "Robotics Club", batch: "20", studentId: "CSE-2005" }


    
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div className="cyber-home approve-page"> 
     
      <div className="glow-sphere"></div>

      <div className="hero-content">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-text">access=enabled</span>
        </div>

        <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
          MEMBERSHIP <span className="text-glow">APPROVAL</span>
        </h1>
        
        <p className="hero-subtitle" style={{ marginBottom: '40px' }}>
          Verification Protocol in progress... <br />
          <span className="highlight">Authorize departmental club members</span>.
        </p>

      
        <div className="table-cyber-container">
          <MemberTable requests={requests} onAction={handleAction} />
        </div>
      </div>
    </div>
  );
};

export default ApproveMembers;