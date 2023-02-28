import './App.css';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Watch from './pages/watch/Watch';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';


const Layout = () =>{
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Watch/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/watch",
        element: <Watch/>,
      },
    ],
  },
  {
    path:"/register",
  element:<Register/>
},
{
  path:"/login",
  element:<Login/>
},
]);

function App() {
  return (
    <div className="app">
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
