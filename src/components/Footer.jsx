import React from "react"

export default function Footer() {
    return (
      <>
        <footer className="footer">
          <div className="md:flex">
            <p className="flex justify-center p-4">Please send us a message, or call us for an appointment (555) 555-5555.</p>
            <div>
              <h5 className="flex justify-center py-4">Hours</h5>
              <div className="flex justify-center py-4">
                <ol >
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
          <div className="text-sm">
            Copyright © 2023 Fraser Footcare - All Rights Reserved.
          </div>
        </footer>
      </>
    )
  }