
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Users, Cpu, Building, MapPin, Package } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", icon: Building },
    { name: "Users", path: "/users", icon: Users },
    { name: "Equipment", path: "/equipment", icon: Cpu },
    { name: "Vendors", path: "/vendors", icon: Package },
    { name: "Company", path: "/company", icon: Building },
    { name: "Worksite", path: "/worksite", icon: MapPin },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            TIMS
          </Link>
          <div className="flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
