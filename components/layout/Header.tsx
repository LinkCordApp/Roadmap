import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import { useClickAway } from 'react-use'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const [active, setActive] = useState(false)
  const ref = useRef(null)
  const toggleActive = () => setActive((active) => !active)
  useClickAway(ref, () => setActive(false))

  const [hamburger, setHamburger] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileAccountExpanded, setMobileAccountExpanded] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = hamburger ? 'hidden' : 'auto'
  }, [hamburger])

  useEffect(() => {
    function handleResize() {
      setHamburger(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header className="bg-header border border-t-0 border-l-0 border-r-0 border-linkcord w-full">
        <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              className="rounded-full"
              priority
              alt="logo"
            />
            <Link href="/">
              <a className="text-lg md:text-xl font-bold ml-3 text-white hover:text-linkcord">
                Link Cord
              </a>
            </Link>
          </div>

          <button
            className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <ul
            className={cn(
              'md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto',
              mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            <li className="mt-3 md:mt-0 md:ml-6" key="Home">
              <Link href="https://linkcord.bio">
                <a className="flex text-white hover:text-linkcord">
                  <FontAwesomeIcon size="lg" icon={['fas', 'home']} />
                  &nbsp;Home
                </a>
              </Link>
            </li>
            <li className="mt-3 md:mt-0 md:ml-6" key="Home">
              <Link href="https://linkcord.bio/about">
                <a className="flex text-white hover:text-linkcord">
                  <FontAwesomeIcon size="lg" icon={['fas', 'info-circle']} />
                  &nbsp;About
                </a>
              </Link>
            </li>
            <li className="mt-3 md:mt-0 md:ml-6" key="Support">
              <Link href="https://linkcord.bio/discord">
                <a className="flex text-white hover:text-linkcord">
                  <FontAwesomeIcon size="lg" icon={['fab', 'discord']} />
                  &nbsp;Discord
                </a>
              </Link>
            </li>
            <li className="mt-3 md:mt-0 md:ml-6" key="Status">
              <Link href="https://linkcord.bio/status">
                <a className="flex text-white hover:text-linkcord">
                  <FontAwesomeIcon size="lg" icon={['fas', 'chart-bar']} />
                  &nbsp;Status
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
