import ClubCardUser from '../../components/User/ClubCardUser';
import './css/UserDashboard.css';

const UserDashboard = () => {
  const clubs = [
    { id: 1, name: 'Programming Club', desc: 'Deep dive into coding and competitive contests.' },
    { id: 2, name: 'Robotics Club', desc: 'Explore the world of hardware, AI, and automation.' },
    { id: 3, name: 'Debating Club', desc: 'Master the art of logic and public speaking.' }
  ];

  const handleJoin = (name) => {
    alert(`JOIN_REQUEST_INITIALIZED: ${name}`);
  };

  return (
    <div className="cyber-home dashboard-page">
      <div className="grid-overlay"></div>
      <div className="glow-sphere"></div>

      <div className="hero-content">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-text">status=user_dashboard_online</span>
        </div>

        <h1 className="hero-title">
          AVAILABLE <span className="text-glow">CLUBS</span>
        </h1>
        
        <p className="hero-subtitle">
          Select a node to initialize join protocol. <br />
          <span className="highlight">Authorized student access only.</span>
        </p>

        <div className="clubs-grid">
          {clubs.map(club => (
            <ClubCardUser 
              key={club.id} 
              name={club.name} 
              desc={club.desc} 
              onJoin={handleJoin} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;