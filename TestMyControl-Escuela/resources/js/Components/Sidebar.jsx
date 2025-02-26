// resources/js/Components/Sidebar.jsx
import React from 'react';
import NavLink from '@/Components/NavLink';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white min-h-screen">
            <div className="p-4">
                <h2 className="text-lg font-semibold">Menú</h2>
                <nav className="mt-4">
                    <NavLink
                        href={route('dashboard')}
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Escuelas
                    </NavLink>
                    <NavLink
                       
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Perfil
                    </NavLink>
                    <NavLink
                      
                        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
                    >
                        Configuración
                    </NavLink>
                </nav>
            </div>
        </aside>
    );
}