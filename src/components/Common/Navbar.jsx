import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, LogIn, Bell, Users, Boxes, Settings, UserCheck, Terminal, LogOut, Menu, X } from 'lucide-react';

const Navbar = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="cyber-nav">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="tech-logo" onClick={closeMenu}>
          <div className="logo-box">
            <Terminal size={20} className="terminal-icon" />
          </div>
          <div className="logo-brand">
            <span className="brand-main">PUB <span className="text-glow">CSE</span></span>
            <span className="brand-sub">CONNECT</span>
          </div>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links-wrapper ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className="cyber-link" onClick={closeMenu}>
            <Home size={18} /> <span>HOME</span>
          </NavLink>

          {!role && (
            <>
              <NavLink to="/login" className="cyber-link" onClick={closeMenu}>
                <LogIn size={18} /> <span>Log in</span>
              </NavLink>
              <Link to="/register" className="nav-btn-highlight" onClick={closeMenu}>
                JOIN COMMUNITY
              </Link>
            </>
          )}

          {role === 'admin' && (
            <div className="role-links">
              <NavLink to="/admin-dashboard" className="cyber-link" onClick={closeMenu}><LayoutDashboard size={18} /> DB_ADMIN</NavLink>
              <NavLink to="/manage-clubs" className="cyber-link" onClick={closeMenu}><Settings size={18} /> CLUBS</NavLink>
              <NavLink to="/approve-members" className="cyber-link" onClick={closeMenu}><UserCheck size={18} /> APPROVALS</NavLink>
              <NavLink to="/post-notice" className="cyber-link notice-pulse" onClick={closeMenu}><Bell size={18} /> NOTICES</NavLink>
            </div>
          )}

          {role === 'user' && (
            <div className="role-links">
              <NavLink to="/user-dashboard" className="cyber-link" onClick={closeMenu}><LayoutDashboard size={18} /> DASHBOARD</NavLink>
              <NavLink to="/my-clubs" className="cyber-link" onClick={closeMenu}><Boxes size={18} /> MY CLUBS</NavLink>
              <NavLink to="/profile" className="cyber-link" onClick={closeMenu}><Users size={18} /> PROFILE</NavLink>
              <NavLink to="/view-notices" className="cyber-link" onClick={closeMenu}><Bell size={18} /> NOTICES</NavLink>
            </div>
          )}

          {role && (
            <button className="cyber-logout" onClick={() => { closeMenu(); window.location.reload(); }}>
              <LogOut size={16} /> EXIT
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;