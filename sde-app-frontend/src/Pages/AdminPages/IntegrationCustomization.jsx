import React from 'react';

const IntegrationCustomization = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Integration and Customization</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Connected Systems</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>HR Management System</li>
            <li>Payroll System</li>
            <li>Time Tracking Software</li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Add New Integration
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Customization Options</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="companyName"
                type="text"
                placeholder="Enter company name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timezone">
                Default Timezone
              </label>
              <select
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="timezone"
              >
                <option>UTC</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              type="submit"
            >
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCustomization;