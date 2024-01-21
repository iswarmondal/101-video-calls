import { createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Landing from './pages/Landing.tsx'
import Room from './pages/Room.tsx'

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: '/room/:roomId',
    element: <Room />
  }
]);
