import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Landing from './pages/Landing.tsx'

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);
