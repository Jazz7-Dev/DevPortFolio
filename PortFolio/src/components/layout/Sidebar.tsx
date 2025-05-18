import { useState } from 'react';
import { FiHome, FiUser, FiBriefcase, FiSettings, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const sections = [
  { id: 'home', name: 'Home', icon: FiHome, path: '/' },
  { id: 'about', name: 'About', icon: FiUser, path: '/about' },
  { id: 'services', name: 'Services', icon: FiBriefcase, path: '/services' },
  { id: 'projects', name: 'Projects', icon: FiSettings, path: '/projects' },
  { id: 'contact', name: 'Contact', icon: FiPhone, path: '/contact' },
];

export function Sidebar({ isOpen, toggleSidebar, resetHoverToggle }: SidebarProps & { resetHoverToggle: () => void }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const visible = hovered || isOpen;

  return (
    <>
      {visible && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={() => {
            toggleSidebar();
            resetHoverToggle();
          }}
          aria-hidden="true"
        />
      )}
      <aside
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${
          visible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="h-full flex flex-col py-6 px-4 space-y-4">
          {sections.map(({ id, name, icon: Icon, path }) => (
            <Link
              key={id}
              to={path}
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleSidebar();
                }
              }}
              className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <Icon className="w-5 h-5" />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
