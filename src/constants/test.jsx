import { useState } from 'react';

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const titles = [
    { title: 'Title 1', content: 'This is the content for Title 1' },
    { title: 'Title 2', content: 'This is the content for Title 2' },
    { title: 'Title 3', content: 'This is the content for Title 3' }
  ];

  return (
    <div className="flex">
      {/* Title Section */}
      <div className="w-1/4 p-4">
        {titles.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`block w-full text-left p-2 ${
              activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-100'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Content Display Section */}
      <div className="w-3/4 p-4 bg-gray-50">
        <h2 className="text-2xl font-bold">{titles[activeTab].title}</h2>
        <p className="mt-4">{titles[activeTab].content}</p>
      </div>
    </div>
  );
}

export default TabComponent;
