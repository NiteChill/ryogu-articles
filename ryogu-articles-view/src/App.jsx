import { useEffect, useState } from 'react';
import './default.scss';
import { Outlet } from 'react-router-dom';

export default function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    // theme //
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    }
  }, [])
  return (
    <div className={`App ${theme}`}>
      <Outlet />
    </div>
  );
}
