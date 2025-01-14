import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 opacity-55">
      <div className="container mx-auto flex justify-between items-center h-[10vh]">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-900 font-bold">About</a>
          <a href="#" className="hover:text-gray-900 font-bold">GitHub</a>
          <a href="#" className="hover:text-gray-900 font-bold">Twitter</a>
          <a href="#" className="hover:text-gray-900 font-bold">YouTube</a>
          <a href="#" className="hover:text-gray-900 font-bold">Donate</a>
        </div>
        <div>
          <span className="text-red-500">❤️</span>
          <span className="ml-2">Hack, Learn, Fix, Teach.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;