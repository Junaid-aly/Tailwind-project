import React from 'react'


import Home from './Home';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
   

    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">HOME</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
          </nav>
          <Link to="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-100 text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">
            Welcome to Our Amazing Product
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover how our solution can help you achieve your goals quickly and efficiently.
          </p>
          <a
            href="#"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-indigo-600 mb-4">Feature One</h4>
              <p className="text-gray-600">Detailed description of Feature One.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-indigo-600 mb-4">Feature Two</h4>
              <p className="text-gray-600">Detailed description of Feature Two.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-indigo-600 mb-4">Feature Three</h4>
              <p className="text-gray-600">Detailed description of Feature Three.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are passionate about delivering the best solutions for our customers. Learn
            more about our mission and values.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 BrandName. All Rights Reserved.</p>
        </div>
      </footer>
    </div>


  
   
  )
}

export default Dashboard
