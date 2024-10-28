import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { Allroute } from './routes/Allroute.jsx';


createRoot(document.getElementById("root")).render(
  <StrictMode>
   
     <Allroute/>
  
   
  </StrictMode>
);
