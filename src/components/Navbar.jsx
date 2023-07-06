import React from "react"
import { Link } from "react-scroll"
import adaLogo from "../assets/ada-logo.jpg"

export default function Navbar() {
    return (
      <>
        <nav className="">
            <div className="flex w-full px-4">
              <ul className="flex gap-4 items-center justify-center md:justify-end bg">
                <li className="my-2 md:mx-8">
                  <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
                <li className="my-2 md:mx-8">
                  <Link to="services" smooth={true} duration={500}>Our Services</Link>
                </li>
              </ul>
            </div>

          <div className="h-80 sm:bg-cover bg-no-repeat bg-contain lg:bg-center lg:bg-auto" style={{backgroundImage:`url(${adaLogo})`}}></div>

        </nav>
      </>
    )
  }