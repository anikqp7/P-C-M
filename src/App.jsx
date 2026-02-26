import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Shared Pages
import Home from './pages/Shared/Home';
import Login from './pages/Shared/Login';
import Register from './pages/Shared/Register';

// Admin Pages
import AdminDashboard from './pages/Admin/AdminDashboard';
import ManageClubs from './pages/Admin/ManageClubs';
import ApproveMembers from './pages/Admin/ApproveMembers';
import PostNotice from './pages/Admin/PostNotice';

// User Pages
//import UserDashboard from './pages/User/MyProfile';
import MyProfile from './pages/User/MyProfile';
import UserDashboard from './pages/User/UserDashboard';
import MyClubs from './pages/User/MyClubs';
import ViewNotices from './pages/User/ViewNotices';

function App() {
  const [userRole, setUserRole] = useState(null); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar role={userRole} />
      
      <div>
        <Routes>
          {/* সবার জন্য উন্মুক্ত */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUserRole={setUserRole} />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes (শুধুমাত্র admin হলে দেখা যাবে) */}
          {userRole === 'admin' ? (
            <>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/manage-clubs" element={<ManageClubs />} />
              <Route path="/approve-members" element={<ApproveMembers />} />
              <Route path="/post-notice" element={<PostNotice />} />
            </>
          ) : null}

          {/* User Routes (শুধুমাত্র user হলে দেখা যাবে) */}
          {userRole === 'user' ? (
            <>
            {/*<Route path="/my-profile" element={<MyProfile />} />*/}
            <Route path="/profile" element={<MyProfile />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/my-clubs" element={<MyClubs />} />
              <Route path="/view-notices" element={<ViewNotices />} />

            </>
          ) : null}

          {/* যদি কেউ ভুল পেজে যায় বা পারমিশন না থাকে তাকে হোমে পাঠিয়ে দাও */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;