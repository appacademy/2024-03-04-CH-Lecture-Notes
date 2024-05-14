import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import PostIndex from './components/PostIndex';
import NavBar from './components/NavBar';

function Layout() {
  
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Layout />,
    children: [
      {
        path: '/:familyName',
        element: <PostIndex />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;