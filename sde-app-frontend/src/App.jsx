import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing';
import AuthForm from './Pages/AuthForm';
import Login from './auth components/SignUp';
import { UserProvider } from '../src/Pages/Web/UserContext';
import AdminPage from './Pages/AdminPages/AdminPage';
import AcademicStaffPage from './Pages/AcademicStaffPages/AcademicStaffPage';
import Dashboard from './Pages/AdminPages/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userType) => {
    setUser({ type: userType });
  };

  const handleLogout = () => {
    setUser(null);
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
                <AdminPage onLogout={handleLogout} />
              ) : (
                <Navigate to="/auth" />
              )
            } 
          />

          <Route 
            path="/academic-dashboard" 
            element={
              user && user.type === 'academic' ? (
                <AcademicStaffPage onLogout={handleLogout} />
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
          <Route path="/admin-dashboard-2" element={<Dashboard/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;