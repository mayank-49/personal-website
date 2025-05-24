import React, { useState} from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the link's href to your resume file path
    link.href = '/Mayank_Resume.pdf';

    // Set the file name for download
    link.download = 'Mayank_Resume.pdf'; 
  
    
    // Append to document, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const NavLink = ({ href, children }) => {
    
    return (
      <a 
        href={href} 
        className="relative text-lg group overflow-hidden"
      >
        <span className={`
          inline-block transform transition-all duration-300
          group-hover:translate-y-[-100%] group-hover:opacity-0
        `}>
          {children}
        </span>
        <span className={`
          absolute top-0 left-0 transform translate-y-full
          transition-all duration-300 group-hover:translate-y-0
          bg-clip-text text-transparent bg-gradient-to-r
          from-blue-500 to-blue-700
        `}>
          {children}
        </span>
        <span className={`
          absolute bottom-0 left-0 w-full h-0.5
          transform scale-x-0 transition-transform duration-300
          bg-gradient-to-r from-blue-400 to-blue-700
          group-hover:scale-x-100 origin-left
        `}></span>
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 text-white shadow-lg backdrop-blur-sm border-b">
      <div className="flex justify-between w-full mx-auto items-center px-6 py-4 md:px-10 md:py-4">
        <div className="flex items-center space-x-2">
          <a href="#home" className="group relative">
            {/* Logo placeholder */}
            <h1 className="text-4xl text-white-600 font-semibold text-blue-500">Mk</h1>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <nav className="flex space-x-12">
            <NavLink href="#aboutme">About me</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          
          <button onClick={handleDownload} className="
            relative overflow-hidden px-6 py-2 
            border-2 border-blue-600 rounded-md
            transition-all duration-300 
            hover:shadow-[0_0_15px_rgba(255,223,0,0.3)]
            group
          ">
            <span className="
              relative z-10 
              transition-colors duration-300
            ">
              Resume
            </span>
            <span className="
              absolute inset-0 w-full h-full 
              bg-gradient-to-r from-blue-400 to-blue-500
              transform translate-y-full transition-transform duration-300
              group-hover:translate-y-0
            "></span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transform transition-transform duration-300 hover:scale-110"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-md z-40">
          <div className="fixed top-0 right-0 h-auto w-3/4 bg-black text-white z-50 shadow-lg transform transition-transform duration-300">
            <div className="flex flex-col justify-start items-start p-8 space-y-6">
              <button
                onClick={toggleMenu}
                className="absolute top-8 sm:top-6 right-6 text-white hover:text-blue-600 transition duration-300 transform hover:rotate-90"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <nav className="flex flex-col space-y-6 text-left w-full">
                {['AboutMe', 'Skills','Experience', 'Projects', 'Contact'].map((item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-md sm:text-lg text-white hover:text-blue-500 transition-all duration-300 transform hover:translate-x-2"
                    onClick={toggleMenu}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                  </a>
                ))}
                <button onClick={handleDownload} className="
                  mt-4 px-6 py-2 border-2 border-blue-600 
                  text-white rounded-md transition-all duration-300
                  hover:bg-blue-500
                  hover:shadow-[0_0_15px_rgba(255,223,0,0.3)]
                ">
                  Resume
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;