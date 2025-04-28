import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import 'antd/dist/reset.css'; // لو تستخدم Ant Design v5 الجديد
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />

    </BrowserRouter>
  </StrictMode>
)
