import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const style = {
  backgroundImage: "url('https://plus.unsplash.com/premium_photo-1700670283974-712d61ab372b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: "cover", // Ensures the image covers the entire div
  backgroundPosition: "center", // Centers the background image
  height: "100vh", // Makes sure the div takes full viewport height
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div  style={style}>
      <App />
    </div>
  </StrictMode>
);
