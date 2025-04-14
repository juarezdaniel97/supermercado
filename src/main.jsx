import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {ThemeProvider} from './contexts/ThemeContext.jsx'
import { ProductsProvider } from './contexts/ProductsContext.jsx'
import { CarritoProvider } from './contexts/CarritoContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UsersProvider } from './contexts/UsersContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <ThemeProvider>
        <UsersProvider>
          <ProductsProvider>
            <CarritoProvider>
              <App />
            </CarritoProvider>
          </ProductsProvider>
        </UsersProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
