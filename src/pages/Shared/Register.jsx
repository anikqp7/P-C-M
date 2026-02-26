import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Info, ArrowRight } from 'lucide-react';

const Register = () => {
  return (
    <div className="login-page">
      <div className="login-bg-grid"></div>
      
      <div className="login-card-cyber">
        {/* logo*/}
        <div className="auth-icon-box">
          <UserPlus size={30} />
        </div>

        {/* আপনার অরিজিনাল টেক্ */}
        <div className="login-header">
          <h2 className="glow-text">Student Registration</h2>
          <p className="dept-text">Department of CSE, Pundra University</p>
        </div>
        
        <form className="cyber-form">
          <div className="input-group-cyber">
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-group-cyber">
            <input type="text" placeholder="Student ID" required />
          </div>

          {/* ব্যাচ সিলেকশন - লগইন ইনপুটের হুবহু সেইম স্টাইল */}
          <div className="input-group-cyber batch-selector">
            <select required className="cyber-select">
              <option value="" disabled selected>Select Batch</option>
              <option value="20">Batch 20</option>
              <option value="21">Batch 21</option>
              <option value="22">Batch 22</option>
              <option value="23">Batch 23</option>
              <option value="24">Batch 24</option>
            </select>
          </div>

          <div className="input-group-cyber">
            <input type="email" placeholder="University Email" required />
          </div>
          
          <div className="input-group-cyber">
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="login-submit-btn">
             Register Now <ArrowRight size={18} />
          </button>
        </form>
        
        {/* লগইন পেজের হুবহু সেইম টিপস বক্স স্টাইল */}
        <div className="login-tips">
          <div className="tip-header">
            <Info size={14} /> <span>SYSTEM_PROTOCOL</span>
          </div>
          <p>Tip: Use your <b>Official Email</b> for registration.</p>
          <p>Wait for <b>Admin Approval</b> after submitting.</p>
        </div>

        <div className="reg-link-container">
           <p>Already have an account? <Link to="/login" className="auth-link">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;