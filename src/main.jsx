import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Main from './Layout/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path: "/addCoffee",
      element:<AddCoffee></AddCoffee>
    },{
      path:"/updateCoffee/:id",
      element:<UpdateCoffee></UpdateCoffee>,
      loader:({params})=> fetch(`http://localhost:5000/coffees/${params.id}`) 
    },{
      path:"/",
      element:<App></App>,
      loader: ()=> fetch('http://localhost:5000/coffees')
    }]
    // loader: ()=> fetch('http://localhost:5000/coffees')
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
