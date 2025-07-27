// src/routes/index.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/global/Header/Header';


// Lazy load pages for performance
const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));
const ProfileAdmin = lazy(() => import('../pages/ProfileAdmin/ProfileAdmin'));
const ProfileTrainer = lazy(() => import('../pages/ProfileTrainer/ProfileTrainer'));
const ProfileUser = lazy(() => import('../pages/ProfileUser/ProfileUser'));
const Signup = lazy(() => import('../pages/Signup/Signup'));
const Login = lazy(() => import('../pages/Login/Login'));





const AppRouter: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />


                    {/* Profile routes */}
                    <Route path="/profileAdmin" element={<ProfileAdmin />} />
                    <Route path="/profileTrainer" element={<ProfileTrainer />} />
                    <Route path="/profileUser" element={<ProfileUser />} />

                    {/* Catch all for 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;
