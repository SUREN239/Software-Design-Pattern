// NavItem.js
import React from 'react';

const NavItem = ({ icon: Icon, title, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-6 py-3 text-left transition-colors duration-300 ${
      active ? 'bg-indigo-700 text-white' : 'text-gray-300 hover:bg-indigo-800 hover:text-white'
    }`}
  >
    <Icon className="mr-3" />
    {title}
  </button>
);

export default NavItem;