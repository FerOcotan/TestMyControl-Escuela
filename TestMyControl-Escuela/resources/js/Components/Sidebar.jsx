import React, { createContext, useState, useContext } from "react";
import { LucideArrowLeftFromLine, LucideArrowRightFromLine, ArrowDown, ArrowUp, Home, University, UserRound, GraduationCap, FileDown, BookOpenCheck, BookPlus, Lock, Contact, Minus, Plus } from "lucide-react";
import { Head, Link } from "@inertiajs/react";
import VerticaLogo from "@/Components/VerticaLogo";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="min-h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        {/* Header */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <VerticaLogo className={`overflow-hidden transition-all ${expanded ? "w-100" : "w-0"}`} />
          <button onClick={() => setExpanded((curr) => !curr)} className="p-2 rounded-lg bg-white-700 hover:bg-orange-100">
            {expanded ? <LucideArrowLeftFromLine /> : <LucideArrowRightFromLine />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-2">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

// SidebarItem
export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
      active ? "bg-gradient-to-tr from-orange-200 to-green-50 text-orange-800" : "hover:bg-orange-50 text-gray-600"
    }`}>
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-orange-400 ${expanded ? "" : "top-2"}`} />}
      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-orange-100 text-orange-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {text}
        </div>
      )}
    </li>
  );
}

export function SidebarSection({ title, icon, children }) {
  const { expanded } = useContext(SidebarContext); // Accede al estado del sidebar
  const [open, setOpen] = useState(false);

  // Cierra el desplegable cuando el sidebar se colapse
  React.useEffect(() => {
    if (!expanded) setOpen(false);
  }, [expanded]);

  return (
    <div>
      <button
        className="flex items-center w-full px-3 py-2 font-medium text-gray-700 rounded-md hover:bg-gray-50 transition"
        onClick={() => setOpen(!open)}
        disabled={!expanded} // Deshabilita el botón si el menú está cerrado
      >
        {icon}
        {expanded && <span className="ml-3">{title}</span>}
        {expanded && <span className="ml-auto">{open ? <Minus size={16} /> : <Plus size={16} />}</span>}
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

