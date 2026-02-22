import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom'

import Hero from '../components/sections/Hero'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'

export default function Layout() {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />

            <ToastContainer />
        </>
    )
}
