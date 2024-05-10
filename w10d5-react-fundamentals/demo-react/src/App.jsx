import JobShow from "./components/JobShow";
import JobIndex from "./components/jobIndex";
import {createBrowserRouter, RouterProvider, Navigate, Outlet} from 'react-router-dom';
import jobData from "./assets/jobData.js";

function App() {

  // const router = createBrowserRouter([
  //   {path: '/jobs', element: <JobIndex jobData={jobData}/>},
  //   { path: '/jobs/:jobId', element: <JobShow jobData={jobData} />},
  //   {path: '*', element: <Navigate to='/jobs' replace={true}/>}
  // ]);

  const router = createBrowserRouter([
    {
      path: '/jobs',
      element: 
      <>
        <JobIndex jobData={jobData} />
        <Outlet />
      </>,
      children: [
        // { index: true, element: <JobIndex jobData={jobData} /> },
        { path: ':jobId', element: <JobShow jobData={jobData} />}
      ]
    },
    { path: '*', element: <Navigate to='/jobs' replace={true} /> }
  ]);

  return (
    <div className="app">
      <h1>Amins job board</h1>
      <RouterProvider router={router}/>
    </div>
);
}

export default App;
