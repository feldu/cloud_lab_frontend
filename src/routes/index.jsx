import React from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import SignInPage from "../pages/Auth/SignIn";
import SignUpPage from "../pages/Auth/SignUp";


export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='/auth/signin'/>}/>
                <Route path='/auth/signin/*' element={<SignInPage/>}/>
                <Route path='/auth/signup/*' element={<SignUpPage/>}/>
            </Routes>
        </Router>
    )
}