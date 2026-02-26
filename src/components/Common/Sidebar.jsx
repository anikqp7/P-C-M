import { Link } from 'react-router-dom';

const Sidebar = ({ links }) => (
  <div style={{ width: '200px', height: '100vh', background: '#f4f4f4', padding: '20px', borderRight: '1px solid #ddd' }}>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {links.map((link, index) => (
        <li key={index} style={{ marginBottom: '15px' }}>
          <Link to={link.path} style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
export default Sidebar;