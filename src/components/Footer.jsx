import React from "react"

export default function Footer() {
    return (
      <>
        <footer className="footer pt-20 bg-amber-100">
          <div className="">
            <div className="flex flex-col justify-center" >

              <p className="flex justify-center pb-14  font-serif font-extrabold text-pink-500 text-xl">
                CONTACT US
              </p>
              <p className="flex justify-center font-serif font-extrabold text-pink-500 text-lg">
                07488247367
              </p>
              <p className="flex justify-center font-serif font-extrabold text-pink-500 text-lg">
                0131 531 5597
              </p>              
              <p className="flex justify-center font-serif font-extrabold text-pink-500 text-lg">
                <a href="mailto:fraserfootcarescot@gmail.com" className="underline pl-2">fraserfootcarescot@gmail.com</a>
              </p>

            </div>
            <div>
              <h5 className="flex justify-center py-4 font-serif font-extrabold text-pink-500 text-lg">Hours</h5>
              <div id="contact" className="flex justify-center pb-20">
                <ol className="font-serif text-pink-500">
                  <li>Mon: 9 am - 4 pm</li>
                  <li>Tue: 9 am - 4 pm</li>
                  <li>Wed: 9 am - 4 pm</li>
                  <li>Thu: 9 am - 4 pm</li>
                  <li>Fri: 9 am - 4 pm</li>
                  <li>Sat: 9 am - 1 pm</li>
                  <li>Sun: close</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="text-sm bg-pink-300">
            Copyright © 2023 Fraser Footcare - All Rights Reserved.
          </div>
        </footer>
      </>
    )
  }