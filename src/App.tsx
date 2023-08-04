import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet to render nested routes

// Styles
import styles from './App.module.scss';
import './App.css'; // Import your global styles if needed

const App = () => {
  return (
    <div className={styles['app']}>
      <Outlet />
    </div>
  );
};

export default App;
