// IntegrationCustomization.js
import React, { useState } from 'react';
import { FaCog, FaDatabase } from 'react-icons/fa';

const IntegrationCustomization = () => {
  const [settings, setSettings] = useState({
    integrationKey: '',
    theme: 'light',
    language: 'en',
  });

  const updateSettings = () => {
    console.log('Updating settings:', settings);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">Integration & Customization</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-1">Integration API Key</label>
          <input
            type="text"
            value={settings.integrationKey}
            onChange={(e) => setSettings({ ...settings, integrationKey: e.target.value })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Theme</label>
          <select
            value={settings.theme}
            onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Language</label>
          <select
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <button onClick={updateSettings} className="bg-purple-500 text-white p-2 rounded flex items-center">
          <FaCog className="mr-2" /> Update Settings
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Data Management</h3>
        <button className="bg-red-500 text-white p-2 rounded mr-2 flex items-center">
          <FaDatabase className="mr-2" /> Backup Data
        </button>
        <button className="bg-green-500 text-white p-2 rounded flex items-center">
          <FaDatabase className="mr-2" /> Restore Data
        </button>
      </div>
    </div>
  );
};

export default IntegrationCustomization;