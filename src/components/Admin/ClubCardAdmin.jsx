const ClubCardAdmin = ({ name, members }) => (
  <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '10px' }}>
    <h4>{name}</h4>
    <p>Members: {members}</p>
    <button style={{ color: 'blue', border: 'none', background: 'none', cursor: 'pointer' }}>Edit</button>
    <button style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', marginLeft: '10px' }}>Delete</button>
  </div>
);
export default ClubCardAdmin;