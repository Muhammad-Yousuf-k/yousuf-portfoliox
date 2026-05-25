import React, { useState, useEffect, useRef } from 'react'
import Button from './Button'

const menuItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About Me', href: '#about' },
  {
    name: 'Services',
    href: '#services',
  },
  { name: 'Showcase', href: '#showCase' },
  { name: 'Contact', href: '#contact' },
]

const ChevronIcon = ({ className }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 4L6 8L10 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const HamburgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path
      d="M3 6h16M3 11h16M3 16h16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path
      d="M5 5l12 12M17 5L5 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const ServicesDropdown = ({ items }) => {
  return (
    <div className="absolute left-0 top-[calc(100%+8px)] min-w-[180px] overflow-hidden rounded-md bg-[var(--primary)] opacity-0 pointer-events-none translate-y-[-6px] transition-all duration-200 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="block border-b border-white/10 px-4 py-[0.65rem] font-['Exo_2',sans-serif] text-[0.78rem] font-bold uppercase tracking-[0.05em] text-[var(--light)] no-underline transition-colors duration-150 last:border-b-0 hover:bg-[var(--secondary)] hover:text-white"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

const MobileServicesItem = ({ item, onLinkClick }) => {
  const [open, setOpen] = useState(false)

  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between border-b border-[rgba(51,51,51,0.08)] bg-transparent py-4 font-['Exo_2',sans-serif] text-base font-bold uppercase tracking-[0.05em] text-[var(--primary)] transition-colors duration-200 hover:text-[var(--secondary)]"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {item.name}
        <ChevronIcon
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''
            }`}
        />
      </button>

      {open && (
        <ul className="mb-1 overflow-hidden rounded bg-[rgba(51,51,51,0.04)] p-0">
          {item.dropdown.map((sub) => (
            <li key={sub.name}>
              <a
                href={sub.href}
                className="block border-b border-[rgba(51,51,51,0.06)] px-4 py-[0.7rem] font-['Exo_2',sans-serif] text-[0.82rem] font-semibold uppercase tracking-[0.04em] text-[#505050] no-underline transition-colors duration-200 last:border-b-0 hover:bg-[rgba(255,82,82,0.05)] hover:text-[var(--secondary)]"
                onClick={onLinkClick}
              >
                {sub.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }

    window.addEventListener('keydown', handleKey)

    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <div
        className={`sticky top-0 z-50 border-b border-[rgba(51,51,51,0.08)] bg-[var(--light)] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_24px_rgba(51,51,51,0.07)]' : ''
          }`}
      >
        <nav
          className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-8"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="shrink-0 font-['Exo_2',sans-serif] text-xl font-extrabold tracking-[-0.5px] text-[var(--primary)] no-underline"
          >
            Muhammad Yousuf
            <span className="text-[var(--secondary)]">.</span>
          </a>

          <ul className="m-0 flex list-none items-center p-0 max-[900px]:hidden" role="list">
            {menuItems.map((item) =>
              item.dropdown ? (
                <li key={item.name} className="group relative list-none">
                  <a
                    href={item.href}
                    className="relative flex items-center gap-1 whitespace-nowrap px-4 py-[0.4rem] font-['Exo_2',sans-serif] text-[0.8rem] font-bold uppercase tracking-[0.05em] text-[var(--primary)] no-underline transition-colors duration-200 hover:text-[var(--secondary)]"
                  >
                    {item.name}
                    <ChevronIcon className="transition-transform duration-200 group-hover:rotate-180" />

                  </a>

                  <ServicesDropdown items={item.dropdown} />
                </li>
              ) : (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="relative block whitespace-nowrap px-4 py-[0.4rem] font-['Exo_2',sans-serif] text-[0.8rem] font-bold uppercase tracking-[0.05em] text-[var(--primary)] no-underline transition-colors duration-200 hover:text-[var(--secondary)] group"
                  >
                    {item.name}

                  </a>
                </li>
              )
            )}

            <li >
              <Button text="Hire Me" />
            </li>
          </ul>

          <button
            type="button"
            className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded border-0 bg-transparent p-0 text-[var(--primary)] transition-colors duration-200 hover:bg-[rgba(51,51,51,0.06)] max-[900px]:flex"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 top-[68px] z-[39] bg-[rgba(51,51,51,0.25)] backdrop-blur-[2px] min-[901px]:hidden ${mobileOpen ? 'block' : 'hidden'
          }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`fixed bottom-0 left-0 right-0 top-[68px] z-40 flex flex-col overflow-y-auto border-t border-[rgba(51,51,51,0.08)] bg-[var(--light)] px-7 pb-8 pt-6 transition-transform duration-300 ease-in-out min-[901px]:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="m-0 flex flex-1 list-none flex-col p-0" role="list">
          {menuItems.map((item) =>
            item.dropdown ? (
              <MobileServicesItem
                key={item.name}
                item={item}
                onLinkClick={closeMobile}
              />
            ) : (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center justify-between border-b border-[rgba(51,51,51,0.08)] py-4 font-['Exo_2',sans-serif] text-base font-bold uppercase tracking-[0.05em] text-[var(--primary)] no-underline transition-colors duration-200 hover:text-[var(--secondary)]"
                  onClick={closeMobile}
                >
                  {item.name}
                </a>
              </li>
            )
          )}
        </ul>

        <a
          href="#contact"
          className="mt-8 flex items-center justify-center rounded bg-[var(--secondary)] p-4 font-['Exo_2',sans-serif] text-[0.9rem] font-bold uppercase tracking-[0.08em] text-[var(--light)] no-underline transition-opacity duration-200 hover:opacity-90"
          onClick={closeMobile}
        >
          Hire Me →
        </a>
      </div>
    </>
  )
}

export default Navbar