import ApplicationLogo from "@/Components/ApplicationLogo";
import AplicationBrand from "@/Components/ApplicationBrand";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

import {
    Home,
    Settings,
    Users,
    AlertCircle,
    File,
    University,
    UserRound,
    GraduationCap,
    FileDown,
    BookPlus,
    BookOpenCheck,
    Lock,
    Contact,
} from "lucide-react";

import Sidebar, { SidebarItem, SidebarSection } from "@/Components/Sidebar";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Contenedor principal con Sidebar y contenido */}
            <div className="flex">
                {user.role === "administrador" && (
                    <Sidebar>
                        <NavLink href={route("dashboard")}>
                            <SidebarItem
                                icon={<Home size={20} />}
                                text="Dashboard"
                                active={route().current("dashboard")}
                            />
                        </NavLink>

                        <NavLink href={route("usuarios.index")}>
                            <SidebarItem
                                icon={<Lock size={20} />}
                                text="Usuarios"
                                active={route().current("usuarios.index")}
                            />
                        </NavLink>

                        <SidebarSection
                            title="Escuela"
                            icon={<University size={20} />}
                            activeRoutes={[
                                "escuela.index",
                                "grado.index",
                                "seccion.index",
                            ]} // Rutas que activan el item
                        >
                            <NavLink
                                href={route("escuela.index")}
                                active={route().current("escuela.index")}
                            >
                                <SidebarItem
                                    icon={<University size={18} />}
                                    text="Escuelas"
                                />
                            </NavLink>
                            <NavLink
                                href={route("grado.index")}
                                active={route().current("grado.index")}
                            >
                                <SidebarItem
                                    icon={<BookPlus size={18} />}
                                    text="Grados"
                                />
                            </NavLink>
                            <NavLink
                                href={route("seccion.index")}
                                active={route().current("seccion.index")}
                            >
                                <SidebarItem
                                    icon={<BookOpenCheck size={18} />}
                                    text="Secciones"
                                />
                            </NavLink>
                        </SidebarSection>

                        {/* Sección de Padres */}
                        <SidebarSection
                            title="Padres"
                            icon={<UserRound size={20} />}
                        >
                            <NavLink href={route("padres.index")}>
                                <SidebarItem
                                    icon={<UserRound size={18} />}
                                    text="Padres"
                                    active={route().current("padres.index")}
                                />
                            </NavLink>
                            <NavLink href={route("PadreAlumno.index")}>
                                <SidebarItem
                                    icon={<Contact size={18} />}
                                    text="Parentesco"
                                    active={route().current(
                                        "PadreAlumno.index"
                                    )}
                                />
                            </NavLink>
                        </SidebarSection>

                        <NavLink href={route("alumno.index")}>
                            <SidebarItem
                                icon={<GraduationCap size={20} />}
                                text="Alumnos"
                                active={route().current("alumno.index")}
                            />
                        </NavLink>

                        <NavLink href={route("reportes.index")}>
                            <SidebarItem
                                icon={<FileDown size={20} />}
                                text="Reportes"
                                active={route().current("reportes.index")}
                            />
                        </NavLink>

                    
                    </Sidebar>
                )}

                <div className="flex-1">
                    <nav className="border-b border-gray-100 bg-white">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 justify-between items-center">
                              
                                <div className="flex shrink-0 items-center justify-left">
                                    <Link href="/dashboard">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                    </Link>
                                </div>

                                {/* Espacio vacío a la izquierda para equilibrar el diseño */}
                                <div className="flex-1"></div>

                                <Link href="/dashboard">
                                    <AplicationBrand className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>

                                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                    <div className="relative ms-3">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                                    >
                                                        {user.name}

                                                        <svg
                                                            className="-me-0.5 ms-2 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Perfil
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Cerrar Sessión
                                                </Dropdown.Link>
                                            </Dropdown.Content>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="-me-2 flex items-center sm:hidden">
                                    <button
                                        onClick={() =>
                                            setShowingNavigationDropdown(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className={
                                                    !showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={
                                                    showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div
                            className={
                                (showingNavigationDropdown
                                    ? "block"
                                    : "hidden") + " sm:hidden"
                            }
                        >
                            <div className="border-t border-gray-200 pb-1 pt-4">
                                <div className="px-4">
                                    <div className="text-base font-medium text-gray-800">
                                        {user.name}
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        {user.email}
                                    </div>
                                </div>

                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route("profile.edit")}
                                    >
                                        Perfil
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Cerrar Sessión
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {header && (
                        <header className="bg-white shadow">
                            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )}

                    <main className="p-6">{children}</main>
                </div>
            </div>
        </div>
    );
}
