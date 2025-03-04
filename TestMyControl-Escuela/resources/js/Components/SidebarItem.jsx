import { useState, useEffect, useContext } from "react";
import { Minus, Plus } from "lucide-react";
import { SidebarContext } from "@/Components/Sidebar";

export function SidebarSection({ title, icon, children, activeRoutes = [] }) {
    const { expanded } = useContext(SidebarContext);
    const isActive = activeRoutes.some((routeName) =>
        route().current(routeName)
    ); // Verifica si alguna ruta está activa
    const [open, setOpen] = useState(isActive);

    // Sincroniza open cuando isActive cambie
    useEffect(() => {
        setOpen(isActive);
    }, [isActive]);

    return (
        <div>
            <button
                className="flex items-center w-full px-3 py-2 font-medium text-gray-700 rounded-md hover:bg-gray-50 transition"
                onClick={() => setOpen((prev) => !prev)}
            >
                {icon}
                {expanded && <span className="ml-3">{title}</span>}
                {expanded && (
                    <span className="ml-auto">
                        {open ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                )}
            </button>

            {/* Contenedor con animación */}
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="pl-6 mt-1 space-y-1">{children}</ul>
            </div>
        </div>
    );
}
