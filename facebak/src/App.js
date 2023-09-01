import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Ppages/login/Login';
import Register from './Ppages/register/Register';
import Home from './Ppages/home/Home';
import Profil from './components/profil/Profil';
import {AuthContext, AuthContextProvider}  from "./context/AuthContext"; 

const App = () => {
  return (
    <AuthContextProvider>
      <AppContent />
    </AuthContextProvider>
  );
};

const AppContent = () => {
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  const isAuthenticated = !!user;

  return (
    <Router>
      <Routes>
        <Route path="/home" element={isAuthenticated ?  <Home /> : <Navigate to="/" />} />
        <Route path="/profil" element={isAuthenticated ?  <Profil /> : <Navigate to="/" />} />
        <Route path="/" element={!isAuthenticated ?  <Login /> : <Navigate to="/home" />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App;
