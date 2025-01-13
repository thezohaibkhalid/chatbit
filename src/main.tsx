import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const style = {
  backgroundImage: "url('https://images.unsplash.com/photo-1487088678257-3a541e6e3922?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  backgroundSize: "cover",  
  backgroundPosition: "center",  
  height: "100vh",  
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div  style={style} className='p-20 '>
         <div className='w-[90vw] h-[90vh] backdrop:backdrop-blur-xl bg-white/40'>
         <App /> 
        </div>
        
       
    </div>
  </StrictMode>
);
