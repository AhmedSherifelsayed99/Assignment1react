import logo from './logo.svg';
import './App.css';
import About from './Compoents/About/About.jsx';
import Layout from './Compoents/Layout/Layout.jsx'
import Contact from './Compoents/Contact/Contact.jsx'
import Portfolio from './Compoents/Portfolio/Portfolio.jsx' 
import Home from './Compoents/Home/Home.jsx';
import { Component } from 'react';
import{RouterProvider, createBrowserRouter} from 'react-router-dom';
import Navbar from './Compoents/Navbar/Navbar.jsx';

let routers= createBrowserRouter([
  {path:'',element:<Layout/> ,children:[
    
      {path:'home' ,element:<Home/>},
      {path:'about' ,element:<About/>},
      {path:'portfolio' , element:<Portfolio/>},
      {path:'contact' , element:<Contact/>}
  
  ]}
])


export default function App(){
  return<>
  
      <RouterProvider router={routers}></RouterProvider>

     

     

     
      
  </>
}