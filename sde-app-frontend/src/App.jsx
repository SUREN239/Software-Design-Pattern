import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing';
import AuthForm from './Pages/AuthForm';
import AdminDashboard from './Pages/Dashboards/AdminDashboard';
import AcademicStaffDashboard from './Pages/Dashboards/AcademicStaffDashboard';
import NonAcademicStaffDashboard from './Pages/Dashboards/NonAcademicStaffDashboard';


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userType) => {
    setUser({ type: userType });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route 
          path="/auth" 
          element={
            user ? (
              <Navigate to={`/${user.type}-dashboard`} />
            ) : (
              <AuthForm onLogin={handleLogin} />
            )
          } 
        />
        <Route 
          path="/admin-dashboard" 
          element={
            user && user.type === 'admin' ? (
              <AdminDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/auth" />
            )
          } 
        />
        <Route 
          path="/academic-dashboard" 
          element={
            user && user.type === 'academic' ? (
              <AcademicStaffDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/auth" />
            )
          } 
        />
        <Route 
          path="/non-academic-dashboard" 
          element={
            user && user.type === 'non-academic' ? (
              <NonAcademicStaffDashboard onLogout={handleLogout} />
            ) : (
              <Navigate to="/auth" />
            )
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;