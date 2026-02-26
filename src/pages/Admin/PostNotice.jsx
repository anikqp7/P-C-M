import NoticeForm from '../../components/Admin/NoticeForm';
import './css/PostNotice.css';

const PostNotice = () => {
  const handlePost = (noticeData) => {
    console.log("Saving to DB:", noticeData);
  };

  return (
    <div className="cyber-home notice-page">
      <div className="grid-overlay"></div>
      <div className="glow-sphere"></div>

      <div className="hero-content">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-text">broadcast_protocol=active</span>
        </div>

        <h1 className="hero-title">
          NOTICE <span className="text-glow">CENTER</span>
        </h1>
        
        <p className="hero-subtitle">
          Initialize department-wide announcement... <br />
          <span className="highlight">Deploying encrypted data to all student nodes</span>.
        </p>

        <div className="notice-wrapper">
          <div className="form-header-bar">
            <span className="access-text">SECURE_BROADCAST_INTERFACE</span>
          </div>
          <div className="form-inner-padding">
            <NoticeForm onPost={handlePost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNotice;