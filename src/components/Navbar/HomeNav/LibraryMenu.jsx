import React, { useState } from 'react';

function LibraryMenu() {
  const [selectedVersion, setSelectedVersion] = useState('JQuery 1.0');

  const versions = [
    'jQuery 1.0',
    'jQuery 1.1',
    'jQuery 1.2',
    'jQuery 1.3',
    'jQuery 1.4',
    'jQuery 1.5',
    'jQuery 1.6',
    'jQuery 1.7',
    'jQuery 1.8',
    'jQuery 1.9',
    'jQuery 1.10',
    'jQuery 1.11',
    'jQuery 1.12',
    'jQuery 2.0',
    'jQuery 2.1',
    'jQuery 2.2',
    'jQuery 3.0',
    'jQuery 3.1.1',
  ];

  const handleVersionChange = (event) => {
    setSelectedVersion(event.target.value);
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 text-left border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {/* <h2 className='text-[0.8rem]'>{selectedVersion}</h2> */}
        <svg
          className="w-5 h-5 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className="absolute z-10 mt-2 w-[20vw] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto max-h-60" // Added max-height and overflow-y-auto
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <ul className="text-gray-700" role="menu">
            {versions.map((version) => (
              <li key={version} role="menuitem">
                <button
                  className="block px-4 py-2 text-sm w-full text-black"
                  onClick={() => setSelectedVersion(version)}
                >
                  {version}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LibraryMenu;