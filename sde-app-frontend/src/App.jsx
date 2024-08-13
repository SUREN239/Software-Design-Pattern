import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from './Pages/AuthForm';
import AcademicStaffPage from './Pages/AcademicStaffPages/AcademicStaffPage';
import Landing from './Pages/Landing';
import { UserProvider } from './Pages/Web/UserContext';

import AdminPage from './Pages/AdminPages/AdminPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userType) => {
    setUser({ type: userType });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route 
          path="/auth" 
          element={
            user ? (
              <Navigate to={user.type === 'admin' ? "/admin-dashboard" : "/user-dashboard"} />
            ) : (
              <AuthForm onLogin={handleLogin} />
            )
          } 
        />
        <Route 
          path="/admin-dashboard" 
          element={
            user && user.type === 'admin' ? (
              <AdminPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/auth" />
            )
          } 
        />
        <Route 
          path="/user-dashboard" 
          element={
            user && user.type !== 'admin' ? (
              <AcademicStaffPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/auth" />
            )
          } 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
