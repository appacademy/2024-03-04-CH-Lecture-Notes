import './App.css';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// import NumbersDisplay from './numbersDisplay';
import StudentIndex from './studentIndex';
import StudentDetails from './studentDetails';
import Form from './form';

function Layout() {
  return (
    <div className='app'>
      <h1>Hello from App</h1>
      {/* <NumbersDisplay /> */}
      <StudentIndex />

      <Form />

      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'students/:studentName',
        element: <StudentDetails />
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
