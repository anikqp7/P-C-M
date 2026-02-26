const ClubCardUser = ({ name, desc, onJoin }) => {
  return (
    <div className="club-card-wrapper">
      <div className="card-scanner"></div> {/* সাইবার এনিমেশন লাইন */}
      <h3 className="club-name">{name}</h3>
      <p className="club-desc">{desc}</p>
      <button className="join-btn" onClick={() => onJoin(name)}>
        REQUEST_ACCESS
      </button>
    </div>
  );
};

export default ClubCardUser;