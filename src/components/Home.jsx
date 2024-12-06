import React, { useContext } from 'react'
import { Link, } from 'react-router-dom';
import {AuthContext} from './Context/AuthContext';


const Home = () => {

  const { user ,setUser } = useContext(AuthContext);

  console.log("user context" , user)


  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <div>
       <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-600 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav>
          <ul>
          
           
            <li className="mb-4">
              <Link to="/settings" className="hover:text-indigo-300">Settings</Link>
            </li>
            <li className="mb-4">
              <Link to="/addTodo" className="hover:text-indigo-300">AddTodo</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-semibold text-gray-800">Welcome Back:  {user?.name}</div>
    
          <div>
 
    
    


                
          </div>
          <button onClick={handleLogout} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>

        {/* Dashboard Widgets/Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Revenue */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Revenue</h3>
            <p className="text-4xl font-bold text-indigo-600">$10,500</p>
          </div>

          {/* Card 2: Users */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Users</h3>
            <p className="text-4xl font-bold text-indigo-600">1,245</p>
          </div>

          {/* Card 3: Sales */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Sales</h3>
            <p className="text-4xl font-bold text-indigo-600">1,950</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Analytics</h3>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {/* Here you could include charts using libraries like chart.js */}
            <p className="text-center text-gray-500">Chart placeholder (use chart.js here)</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
