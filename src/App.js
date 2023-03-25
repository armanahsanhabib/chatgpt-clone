import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      <Layout>
        <h1>Hello</h1>
      </Layout>
    </div>
  );
};

export default App;