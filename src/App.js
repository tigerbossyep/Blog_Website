import React from 'react'
import Routelayout from './Ui/Routelayout'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Ui/Features/Home'
import Card1 from './Card1'
import Account from './Ui/Features/Account'
import Blocks from './Ui/Features/Blocks'
import Counter from './Ui/Features/Counter'


const router  = createBrowserRouter ([{

  path: '/',
  element:<Routelayout/>,
  children:[
    {index:true,element:<Home/>},
    {path: 'pages',element:<Card1/>},
    {path: 'Account', element:<Account/>},
    {path: 'Blocks', element:<Counter/>},
   
]

}])
const App = () =>{
  return (
    <RouterProvider router= {router}/>
  )
}


export default App 