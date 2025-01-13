import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { ContextProvider } from './Context/NavContext'
import { Provider } from 'react-redux';
import { store } from './store/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
    <ContextProvider>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
    </ContextProvider>
    </Provider>
  </StrictMode>,
)
