import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterSection = () => {
  const address = "New Karachi Sector 5-E";
  const email = "Muhammad.yousuf8166@gmail.com";
  const phoneNum = "+92 313 298 0452";

  return (
    <footer className="bg-[var(--primary)] text-[var(--light)] w-[100%] overflow-hidden py-12">
      <div className="grid grid-cols-1 gap-8 px-6 mx-auto max-w-7xl md:grid-cols-4">

        <div>
          <h2 className="text-2xl font-bold text-[var(--secondary)] mb-4">Mohammad Yousuf</h2>
          <p className="text-sm leading-relaxed">
            Building modern and responsive web applications with React, Tailwind, and more.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "ShowCase", "Testimonials", "Contact"].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-[var(--secondary)] transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-y-1'>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <p className="text-sm">{address}</p>
          <p className="text-sm">{email}</p>
          <p className="text-sm">{phoneNum}</p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-3 mb-4">
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-1 bg-[var(--secondary)] rounded-full text-[var(--primary)] hover:scale-110 transition-transform"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://wa.me/3132980452"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-1 bg-[var(--secondary)] rounded-full text-[var(--primary)] hover:scale-110 transition-transform"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/it.yousuf_?igsh=Z2xwNmYwZWppcnRq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-1 bg-[var(--secondary)] rounded-full text-[var(--primary)] hover:scale-110 transition-transform"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/myousufkha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1 bg-[var(--secondary)] rounded-full text-[var(--primary)] hover:scale-110 transition-transform"
            >
              <FaLinkedinIn size={20} />
            </a>

          </div>
        </div>

      </div>

      <div className="pt-6 mt-12 text-sm text-center border-t border-gray-700">
        &copy; {new Date().getFullYear()} Mohammad Yousuf. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
