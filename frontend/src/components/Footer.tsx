import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Your App</h3>
            <p className="text-gray-400 text-sm mt-1">Building amazing experiences</p>
          </div>
          
          <nav className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2024 Your App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
