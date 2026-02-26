import { Terminal, Github, Linkedin, Mail, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="cyber-footer">
      <div className="footer-grid-bg"></div>
      
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-box">
              <Terminal size={20} />
            </div>
            <div className="brand-info">
              <h4>PUB CSE-CONNECT</h4>
              
            </div>
          </div>

          <div className="footer-socials">
            <a href="#" className="social-icon"><Github size={18} /></a>
            <a href="#" className="social-icon"><Linkedin size={18} /></a>
            <a href="#" className="social-icon"><Mail size={18} /></a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-credits">
            <Terminal size={14} className="term-icon" />
            <span>
              PROJECT_BY: <span className="dev-name">ASFARUL_&_ASRAFIA</span>
            </span>
          </div>
          
          <div className="footer-copy">
            <p>© 2026_ALL_RIGHTS_RESERVED</p>
            <small>DEPT_OF_CSE, PUNDRA_UNIVERSITY</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;