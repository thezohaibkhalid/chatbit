import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const style = {
  backgroundImage: "url('https://media.istockphoto.com/id/1162167657/photo/hand-painted-background-with-mixed-liquid-blue-and-golden-paints-abstract-fluid-acrylic.webp?a=1&b=1&s=612x612&w=0&k=20&c=lnpN1MmAuPG9yB3r5Y9EKrzRIF3siGSK7GZJmipXT14=')",
  backgroundSize: "cover",  
  backgroundPosition: "center",  
  height: "100vh",  
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div  style={style} className='p-20 '>
         <div className='w-[90vw] h-[90vh] backdrop:backdrop-blur-xl bg-black/40 rounded-lg'>
         <App /> 
        </div>
        
       
    </div>
  </StrictMode>
);
