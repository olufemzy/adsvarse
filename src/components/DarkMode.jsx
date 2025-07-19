import React, { useEffect, useState } from 'react'
import { IoSunny, IoMoon } from "react-icons/io5";

const DarkMode = () => {
   const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localStorage.getItem('theme'))
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
   <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded"
    >
      {darkMode ? <IoSunny/> : <IoMoon/>}
    </button>
  )
}

export default DarkMode