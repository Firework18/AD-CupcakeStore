import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-primary shadow-sm">
            <div className="flex-1">
                <Link to='/' className="btn btn-soft btn-primary text-xl">CupCAKE</Link>
            </div>
            <div className="flex-none font-bold text-white">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" end>Inicio</NavLink></li>
                    <li><NavLink to="/store" end>Tienda</NavLink></li>
                    <li><NavLink to="/about" end>Nosotros</NavLink></li>
                    {/* <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/store">Tienda</Link></li>
                                <li><Link to="/about">Nosotros</Link></li>
                            </ul>
                        </details>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
