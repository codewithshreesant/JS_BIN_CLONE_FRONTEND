import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

function Card({ title, description, image }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button onClick={toggleCard}>
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="p-4">
          <p className="text-gray-700">{description}</p>
          {image && (
            <img src={image} alt={title} className="mt-4 rounded-md" />
          )}
        </div>
      )}
    </div>
  );
}

export default function CardApp() {
  return (
    <div className="container mx-auto p-4">
      <Card
        title="Card 1 Title"
        description="This is the description for Card 1."
        image="https://via.placeholder.com/300" // Replace with actual image URL
      />
      <Card
        title="Card 2 Title"
        description="This is the description for Card 2."
      />
      <Card
        title="Card 3 Title"
        description="This is the description for Card 3."
        image="https://via.placeholder.com/300" // Replace with actual image URL
      />
    </div>
  );
}

