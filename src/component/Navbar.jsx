import React, { useState } from 'react'


const menuItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  {
    name: "Services",
    href: "#service",
    dropdown: ["Logo design", "Web design", "App Development", "SEO", "Web Development"]
  },
  { name: "My ShowCase", href: "#showCase" },
  { name: "Testimonials", href: "#testimonial" },
  { name: "Contact me", href: "#contact" }
];

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [DropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault(); // Prevent navigation
    setDropdownOpen(!DropdownOpen);
  };

  return (
    <>
      <nav className='flex sm:flex-wrap justify-around items-center px-3 py-1 lg:h-[15vh] h-[10vh] xl:h-[10vh] w-full overflowhidden fixed bg-[var(--light)] z-50'>
        <div className='flex justify-center'>
          <h1 className='text-2xl sm:text-3xl font-bold text-nowrap'>Mohammad Yousuf<span className='text-[var(--secondary)] font-[900]'>.</span></h1>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-5 font-medium items-center'>

            {menuItems.map((e, idx) => {
              return e.name === "Services" && e.dropdown ? <li key={idx} className='hover:bg-[var(--secondary)] hover:text-white group px-4 py-1 rounded relative'>
                <a href="#service" className='flex items-center justify-center group'>Services <svg className='w-5 h-5 -rotate-90 group-hover:rotate-0 transition-transform duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M300.3 440.8C312.9 451 331.4 450.3 343.1 438.6L471.1 310.6C480.3 301.4 483 287.7 478 275.7C473 263.7 461.4 256 448.5 256L192.5 256C179.6 256 167.9 263.8 162.9 275.8C157.9 287.8 160.7 301.5 169.9 310.6L297.9 438.6L300.3 440.8z" /></svg></a>
                <div className='bg-[var(--secondary)] absolute group-hover:block hidden'>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Logo design</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Web design</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>App Development</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>SEO</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Web Development</h1>
                  </a>
                </div>
              </li> : <li key={idx} className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href={e.href}>{e.name}</a></li>
            })}

            <li className='px-4 py-1'><a href="#contact"><button className='bg-[var(--secondary)] hover:bg-[var(--primary)] active:scale-95 text-[var(--light)] text-1xl px-6 py-3 rounded'>Hire Me</button></a></li>
          </ul>
        </div>

        <li className='px-4 py-1 list-none lg:hidden'><button onClick={toggleMobileMenu} className='active:scale-95 text-black text-2xl px-6 py-3'><i className="fa-solid fa-bars"></i></button></li>
      </nav>


      {mobileMenuOpen && (
        <div id='pMenu' className="fixed z-40 w-full h-[100vh] bg-[var(--light)]">
          <ul className='flex flex-col gap-5 font-medium items-center'>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#hero">Home</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#about">About</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white group px-4 py-1 rounded relative'>
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center justify-center bg-transparent">Services</button>

              {DropdownOpen && (
                <div className='bg-[var(--secondary)] text-white absolute group-hover:block'>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Logo design</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Web design</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>App Development</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>SEO</h1>
                  </a>
                  <a href="#service">
                    <h1 className='text-nowrap px-2 py-1 cursor-pointer hover:bg-[var(--primary)]'>Web Development</h1>
                  </a>
                </div>

              )}
            </li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#showCase">My ShowCase</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#testimonial">Testimonials</a></li>
            <li className='hover:bg-[var(--secondary)] hover:text-white px-4 py-1 rounded'><a href="#contact">Contact me</a></li>
            <li className='px-4 py-1'><a href="#contact"><button className='bg-[var(--secondary)] hover:bg-[var(--primary)] active:scale-95 text-[var(--light)] text-1xl px-6 py-3 rounded'>Hire Me</button></a></li>
          </ul>
        </div>
      )}

    </>
  )
}

export default Navbar