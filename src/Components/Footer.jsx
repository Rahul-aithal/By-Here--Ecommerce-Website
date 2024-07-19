import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between">

        {/* Brand Section */}
        <div className="w-full md:w-1/4 mb-4">
          <h2 className="text-2xl font-bold mb-4">BuyHere</h2>
          <p className="text-gray-400 mb-4">
            Your brand's tagline or a brief description goes here. Keep it concise and engaging.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.54 6.42a8.69 8.69 0 0 1-2.51.68 4.32 4.32 0 0 0 1.89-2.38 8.61 8.61 0 0 1-2.74 1.04 4.31 4.31 0 0 0-7.35 3.93 12.24 12.24 0 0 1-8.88-4.5 4.31 4.31 0 0 0 1.33 5.75A4.27 4.27 0 0 1 2 9.65v.06a4.31 4.31 0 0 0 3.45 4.23 4.33 4.33 0 0 1-1.93.07 4.32 4.32 0 0 0 4.03 2.99 8.68 8.68 0 0 1-6.4 1.8 12.22 12.22 0 0 0 6.64 1.94c7.98 0 12.34-6.61 12.34-12.34l-.01-.56a8.83 8.83 0 0 0 2.17-2.26z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-9.98-2.52h1.99c.35 0 .64-.28.64-.64V8.51a.64.64 0 0 0-.64-.64H12.3c-.18 0-.34.07-.46.2a.64.64 0 0 0-.18.45v2.82c0 .18.07.34.2.46a.64.64 0 0 0 .46.19zM10.02 12h1.99a.64.64 0 0 0 .64-.64V8.51a.64.64 0 0 0-.64-.64H10.02a.64.64 0 0 0-.64.64v2.82c0 .18.07.34.2.46.12.12.28.19.46.19zm2.3 5.51h1.99c.35 0 .64-.28.64-.64v-1.99a.64.64 0 0 0-.64-.64h-1.99a.64.64 0 0 0-.64.64v1.99c0 .18.07.34.2.46.12.12.28.19.46.19zM10.02 18h1.99a.64.64 0 0 0 .64-.64v-1.99a.64.64 0 0 0-.64-.64H10.02a.64.64 0 0 0-.64.64v1.99c0 .18.07.34.2.46.12.12.28.19.46.19zm-2.52-2.03a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zM4.28 10.79a.75.75 0 0 1 1.5 0V14a.75.75 0 0 1-1.5 0v-3.21zM19.5 12a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0zm-6.03 0h-.99V8.51a.64.64 0 0 1 .64-.64h.99a.64.64 0 0 1 .64.64V12a.64.64 0 0 1-.64.64zm2.01 0h.99c.18 0 .34-.07.46-.2a.64.64 0 0 0 .18-.45V8.51a.64.64 0 0 0-.64-.64h-.99a.64.64 0 0 0-.64.64V12c0 .18.07.34.2.46.12.12.28.19.46.19z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.25 2H4.75A2.75 2.75 0 0 0 2 4.75v14.5A2.75 2.75 0 0 0 4.75 22h14.5A2.75 2.75 0 0 0 22 19.25V4.75A2.75 2.75 0 0 0 19.25 2zm-3.75 9.75h-2v5.5H12V11.75h-1.5v-2H12V8.5c0-1.66 1.34-3 3-3h1.5v2H15c-.55 0-1 .45-1 1v1.25h2.5v2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to='/' className="hover:text-gray-300">Home</Link></li>
            <li><Link to='/about' className="hover:text-gray-300">About</Link></li>
            <li><Link to='/support' className="hover:text-gray-300">Support</Link></li>
            <li><Link to='/blogs' className="hover:text-gray-300">Blogs</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="w-full md:w-1/4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-1 text-gray-400">
            <li>123 Street Name, City</li>
            <li>Email: info@yourbrand.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; 2024 Your Brand. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
