import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, Info, ShieldCheck } from 'lucide-react';

const Login = ({ setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // আপনার দেওয়া অরিজিনাল লজিক
    if (username.toLowerCase() === 'admin') {
      setUserRole('admin');
      navigate('/admin-dashboard');
    } else {
      setUserRole('user');
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="login-page">
      {/* Background Decor */}
      <div className="login-bg-grid"></div>
      
      <div className="login-card-cyber">
        {/* লোগো আইকন */}
        <div className="auth-icon-box">
          <ShieldCheck size={30} />
        </div>

        {/* আপনার অরিজিনাল টেক্সট প্যাটার্ন */}
        <div className="login-header">
          <h2 className="glow-text">PUB CSE-Connect Login</h2>
          <p className="dept-text">Department of CSE, Pundra University</p>
        </div>
        
        <form onSubmit={handleLogin} className="cyber-form">
          <div className="input-group-cyber">
            <input 
              type="text" 
              placeholder="Student ID or Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group-cyber">
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="login-submit-btn">
             <LogIn size={18} /> Login Now
          </button>
        </form>
        
        {/* আপনার অরিজিনাল Tip/Hint সেকশন */}
        <div className="login-tips">
          <div className="tip-header">
            <Info size={14} /> <span>SYSTEM_HINT</span>
          </div>
          <p>Tip: Type <b>admin</b> to login as Admin</p>
          <p>Type anything else to login as Student</p>
        </div>

        <div className="reg-link-container">
           <p>New here? <Link to="/register" className="auth-link">Registration</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;