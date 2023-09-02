import {
  createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Planes from "./pages/Planes/Planes";
import Plan from "./pages/Plan/Plan";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Children } from "react";
import "./app.scss";

const Layout = () =>{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Inicio/>
      },
      {
        path:"/planes/:id",
        element:<Planes/>
      },
      {
        path:"/plan/:id",
        element:<Plan/>
      },
    ]
  }
])

function App() {
  return( 
  <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
