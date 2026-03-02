import { Link } from 'react-router-dom';
import { Code, Cpu, MessageSquare, Terminal, ChevronRight } from 'lucide-react';


const Home = () => {
  return (
    <div className="cyber-home">
     
      
      <div className="glow-sphere"></div>

      <div className="hero-content">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-text">status=active</span>
        </div>

        <h1 className="hero-title">
          PUB <span className="text-glow">CSE</span>-CONNECT
        </h1>
        
        <p className="hero-subtitle">
          Executing innovation.log... <br />
          The official hub for logic and creativity at 
          <span className="highlight"> Pundra University CSE Department</span>.
        </p>

        <div className="home-card-container">
          {/* Programming Club */}
          <div className="cyber-card">
            <div className="card-edge"></div>
            <div className="card-icon-box"><Code size={35} /></div>
            <h3>PROGRAMMING_CLUB</h3>
            <p>Master the syntax, win the contests, and build the future with logic.</p>
            
          </div>

          {/* Robotics Club */}
          <div className="cyber-card">
            <div className="card-edge"></div>
            <div className="card-icon-box"><Cpu size={35} /></div>
            <h3>ROBOTICS_CLUB</h3>
            <p>From circuits to AI, bring your mechanical dreams to life in reality.</p>
            
          </div>

          {/* Debating Club */}
          <div className="cyber-card">
            <div className="card-edge"></div>
            <div className="card-icon-box"><MessageSquare size={35} /></div>
            <h3>LOGIC_DEBATERS</h3>
            <p>Analyze, argue, and persuade with the ultimate power of pure logic.</p>
            
          </div>
        </div>

        <div className="hero-action">
          <Link to="/login" className="cyber-btn-primary">
            GET STARTED <ChevronRight size={18} />
          </Link>
          <Link to="/register" className="cyber-btn-outline">
            JOIN COMMUNITY
          </Link>
        </div>
      {/* Recent Activity*/}
        <h2 className="section-divider">RECENT-ACTIVITIES</h2>
        <div className="photo-grid">
           <div className="photo-item"><img src="/image/1.png" alt="event1" /><div className="img-tag">Workshop</div></div>
           <div className="photo-item"><img src="/image/3.png" alt="event2" /><div className="img-tag">Programming Contest</div></div>
           <div className="photo-item"><img src="/image/2.png" alt="event3" /><div className="img-tag">Robo Expo</div></div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;