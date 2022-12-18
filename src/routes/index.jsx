import React from 'react'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import SignInPage from "../pages/Auth/SignIn";
import SignUpPage from "../pages/Auth/SignUp";
import MainPage from "../pages/MainPage";
import {useSelector} from "react-redux";


export function AppRoutes() {
    const currentUser = useSelector(state => state.auth.currentUser)
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='/auth/signin'/>}/>
                <Route path='/auth/signin/*' element={currentUser.username ? <Navigate to='/plants'/> : <SignInPage/>}/>
                <Route path='/auth/signup/*' element={<SignUpPage/>}/>
                <Route path='/plants' element={currentUser.username ? <MainPage/> : <Navigate to='/'/>}/>
            </Routes>
        </Router>
    )
}