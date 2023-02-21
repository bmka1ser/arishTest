import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import { authContext } from '../Context/useContext'
import { publicRoutes } from '../Routes/routes'
import { privateRoutes } from '../Routes/routes'
import { useContext } from 'react'
import { testContext } from '../Context/useContext'
import { useState } from 'react'
import TestPassing from '../Pages/TestPassing/TestPassing'
function AppRouter() {
    const{isAuth}= useContext(authContext)
 

  return (
    
    
      isAuth
      ?
      <Routes> 
         {privateRoutes.map(route=>
        <Route key={route.path} exact={route.exact} path={route.path}  element={route.element}/>
        )
        }
        <Route exact path="/" element={ <Navigate replace to={"/main"}/>}/>
        <Route  path="*" element={ <Navigate replace  to={"/"}  />}/>
        <Route element={ <Navigate replace to={"/main"}/>} />
        

        </Routes>
        
        
      : <Routes>
      {publicRoutes.map(route=>
        <Route key={route.path} exact={route.exact} path={route.path} element={route.element}/>
        )}
      
    </Routes>
    
  )
}
export default AppRouter
