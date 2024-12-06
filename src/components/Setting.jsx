import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account'); 
  const currentUser = JSON.parse(localStorage.getItem("user"));
 


  
  // Tracks the actconst handleInputChange = (e) => {
    const handleInputChange = (e) => {
      setUser({ ...currentUser, name: e.target.value });
    };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Navigation for Tabs */}
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Settings</h3>
            <ul className="space-y-4">
              <li
                className={`cursor-pointer ${activeTab === 'account' ? 'text-indigo-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab('account')}
              >
                Account
              </li>
              <li
                className={`cursor-pointer ${activeTab === 'security' ? 'text-indigo-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab('security')}
              >
                Security
              </li>
              <li
                className={`cursor-pointer ${activeTab === 'notifications' ? 'text-indigo-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab('notifications')}
              >
                Notifications
              </li>
              <li
                className={`cursor-pointer ${activeTab === 'preferences' ? 'text-indigo-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setActiveTab('preferences')}
              >
                Preferences
              </li>
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="col-span-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              {/* Account Tab Content */}
              {activeTab === 'account' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Account Settings</h3>
                  <form>
                    <div className="space-y-4">
                    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="John Doe"
        value={currentUser.name}
        onChange={handleInputChange}
      />
    </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                          placeholder="example@domain.com"
                          value={currentUser.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-500"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Security Tab Content */}
              {activeTab === 'security' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Security Settings</h3>
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Current Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                          placeholder="********"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">New Password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                          placeholder="********"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-500"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Notifications Tab Content */}
              {activeTab === 'notifications' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Notification Settings</h3>
                  <form>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded" />
                        <label className="ml-3 text-sm text-gray-600">Email Notifications</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 rounded" />
                        <label className="ml-3 text-sm text-gray-600">SMS Notifications</label>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-500"
                      >
                        Save Notification Settings
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Preferences Tab Content */}
              {activeTab === 'preferences' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Preferences</h3>
                  <form>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Language</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                          <option value="english">English</option>
                          <option value="spanish">Spanish</option>
                          <option value="french">French</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-2">Theme</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600">
                          <option value="light">Light</option>
                          <option value="dark">Dark</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-500"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
