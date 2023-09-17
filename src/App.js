import React from 'react'
import Layout from './Layout/Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Commponents/About/About'
import Portfolio from './Commponents/Portfolio/Portfolio'
import Contact from './Commponents/Contact/Contact'
import Home from './Commponents/Home/Home'


export default function App() {
    const router=createBrowserRouter([
        {path:'/',element:<Layout/>,children:([
            {index:true,element:<Home/>},
            {path:"about",element:<About/>},
            {path:'portfolio',element:<Portfolio/>},
            {path:"contact",element:<Contact/>},
            
        ])}
    ])
    return (
    <div>
        
            <RouterProvider router={router}/>
    </div>
    )
}
