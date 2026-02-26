import { useState } from 'react';

const NoticeForm = ({ onPost }) => {
  const [notice, setNotice] = useState({
    title: '',
    description: '',
    club: 'Programming Club'
  });

  const handleChange = (e) => {
    setNotice({ ...notice, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notice.title && notice.description) {
      onPost(notice);
      alert("Notice submitted successfully!");
      setNotice({ title: '', description: '', club: 'Programming Club' });
    }
  };

  return (
    <div className="cyber-form-container">
      <h4 className="form-inner-title">CREATE_NEW_BROADCAST</h4>
      <form onSubmit={handleSubmit} className="cyber-form-inner">
        <div className="form-group">
          <label>TARGET_CLUB</label>
          <select 
            name="club" 
            value={notice.club} 
            onChange={handleChange}
          >
            <option>Programming Club</option>
            <option>Robotics Club</option>
            <option>Debating Club</option>
          </select>
        </div>

        <div className="form-group">
          <label>TITLE</label>
          <input 
            type="text" 
            name="title"
            placeholder="e.g. Urgent Meeting" 
            value={notice.title}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label>DESCRIPTION</label>
          <textarea 
            name="description"
            placeholder="Write notice details here..." 
            rows="4"
            value={notice.description}
            onChange={handleChange}
            required 
          ></textarea>
        </div>

        <button type="submit" className="broadcast-btn">
          PUBLISH_NOTICE
        </button>
      </form>
    </div>
  );
};

export default NoticeForm;