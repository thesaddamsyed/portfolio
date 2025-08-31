import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  //Check scroll and change navbar background
  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])


  //Smooth scrolling to sections
  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  }

  const menuItems = [
    {
      id: "about",
      label: "About"
    }, 
    {
      id: "skills",
      label: "Skills"
    }, 
    {
      id: "experience",
      label: "Experience"
    },
    {
      id: "projects",
      label: "Projects"
    },
    {
      id: "education",
      label: "Education"
    },
    {
      id: "contact",
      label: "Contact"
    }

  ]
  return (
    <nav className={`w-full fixed top-0 left-0 z-50 px-8 md:px-16 lg:px-32 transition-colors duration-300 ${scrolled ? 'bg-[#0a0a23] shadow-lg' : 'bg-transparent'}`}>
      <div className='text-white py-5 flex justify-between items-center'>
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Rafi</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Syed</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* Desktop Menu */}


        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((item) => (
            <li key={item.id} className={`hover:text-[#8245ec] cursor-pointer p-2 ${
              activeSection === item.id ? 'text-[#8245ec]' : 'text-gray-300'}`}>
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}

        <div className='hidden md:flex space-x-4 text-gray-300'>
          <a href="" target="_blank" rel="noopener noreferrer" className='hover:text-[#8245ec]'>
            <FaGithub size={24} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className='hover:text-[#8245ec]'>
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-300 hover:text-white focus:outline-none'>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>


        {/* Mobile Menu Items*/}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-1/2  transform -translate-x-1/2 w-4/5 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
            <ul className='flex flex-col items-center space-y-4 py-4'>
              {menuItems.map((item) => (
                <li key={item.id} className={`hover:text-[#8245ec] cursor-pointer p-2 ${
                  activeSection === item.id ? 'text-[#8245ec]' : 'text-gray-300'}`}>
                  <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
                </li>
              ))}
              <div className='flex space-x-4 text-gray-300 pt-2'>
                <a href="" target="_blank" rel="noopener noreferrer" className='hover:text-[#8245ec]'>
                  <FaGithub size={24} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className='hover:text-[#8245ec]'>
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
        
      


      </div>
    </nav>
  )
}

export default Navbar