
import Registration from "../Pages/Authorization/Registration";
import MainAuthorization from "../Pages/Authorization/MainAuthorization";
import Login from "../Pages/Authorization/Login";
import Main from "../Pages/Main/Main";
import { Navigate } from "react-router-dom";
import Support from "../Pages/Support/Support";
import AboutUs from "../Pages/AboutUs/AboutUs"
import MyTests from "../Pages/MyTests/MyTests";
import PassTest from "../Pages/PassTest/PassTest";
import CreateTest from "../Pages/CreateTest/CreateTest";
import UserProfile from "../Pages/UserProfile/UserProfile";

export const privateRoutes=[

    {path:"/main",element:<Main/>,exact:true},
    {path:"/support",element:<Support/>,exact: true},
    {path:"/about",element:<AboutUs/>,exact:true},
    {path:"/myTests",element:<MyTests/>,exact:true},
    {path:"/testCreater",element:<CreateTest/>,exact:true},
    {path:"/passTests",element:<PassTest/>,exact:true},
    {path:"/myProfile",element:<UserProfile/>,exact:true}

]

export const publicRoutes=[
    {path:"/authorization/login",element:<Login/>,exact:true},
    {path:"/authorization/registration",element:<Registration/>,exact:true},
    {path:"/authorization",element:<MainAuthorization/>,exact:true},
    {path:"/",element:<Navigate replace to="/authorization"/>,exact:true},
    {path:"*",element:<Navigate replace to="/authorization"/>,exact:true},
    {path:"/support",element:<Support/>,exact: true}
]
    