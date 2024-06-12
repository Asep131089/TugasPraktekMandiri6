import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const formattedTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedTime);
    }

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container-fluid banner">
      <div className="container text-center">
        <h4 className="display-6">Selamat datang di Website saya</h4>
        <h3 className="display-5">Asep Maulana!</h3>
        <div id="currentTime" className="mt-3" style={{ fontSize: '1.5em' }}>{currentTime}</div>
      </div>
    </div>
  );
}

export default Banner;
