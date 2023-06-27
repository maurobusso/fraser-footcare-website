import React from "react"
import { Link } from "react-scroll"

export default function Navbar() {
    return (
      <>
        <nav className="h-80 bg-pink-300">
          <div className="flex">
            <div className="mx-4 flex justify-start">
              <ul className="flex gap-2 items-center justify-center md:justify-start">
                <li className="my-2 md:mx-4">
                  <button>0</button>
                </li>
                <li className="my-2 md:mx-4">
                  <button>0</button>
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <ul className="flex gap-4 items-center justify-center mx-4 md:justify-end">
                <li className="my-2 md:mx-8">
                  <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
                <li className="my-2 md:mx-8">
                  <Link to="contact" smooth={true} duration={500}>About Us</Link>
                </li>
                <li className="my-2 md:mx-8">
                  <Link to="services" smooth={true} duration={500}>Our Services</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }