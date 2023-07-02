import React from "react"

export default function Footer() {
    return (
      <>
        <footer className="footer pt-20 bg-amber-100">
          <div className="">
            <div>
              <p className="flex justify-center p-4">Please send us a message, or call us for an appointment (555) 555-5555.</p>
            </div>
            <div>
              <h5 className="flex justify-center py-4 font-serif font-extrabold text-pink-500 text-lg">Hours</h5>
              <div id="contact" className="flex justify-center pb-20">
                <ol className="font-serif text-pink-500">
                  <li>Mon: 9 am - 5 pm</li>
                  <li>Tue: 9 am - 5 pm</li>
                  <li>Wed: 9 am - 5 pm</li>
                  <li>Thu: 9 am - 5 pm</li>
                  <li>Fri: 9 am - 5 pm</li>
                  <li>Sat: close</li>
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