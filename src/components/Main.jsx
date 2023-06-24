import React from "react"
import rcopLogo from "../assets/RCOP-logo.png"
import ada1 from "../assets/ada1.jpg"

export default function Main() {
    return (
      <>
        <div className="main">

          <h2 className="flex justify-center py-4">About Us</h2>

          <div className="pb-24 px-12 md:flex md:items-center">
            <div className="relative mx-auto w-60 h-60 my-20 rounded-xl lg:w-80 lg:h-80 border-2">
                <img src={ada1} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
            </div>
            <div className="text-lg md:px-8 lg:px-16 md:mt-20 md:max-w-2xl">
              <h4 className="flex justify-center">Compassionate healthcare</h4>
              <p className="text-lg md:px-8 lg:px-16 mt-8 md:mt-2 md:max-w-2xl">
                Ada Fraser BSe. As healthcare changes so does provision, with more people requiring home visits. Home visits depend on patient's needs from routine nail cutting to more advanced services such as vascular or neurovascular assessments 
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center md:flex mx-20 my-20 max-w-5xl">
              <div className="mx-4 rounded-xl border-2">
                <img src={rcopLogo} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl" />
              </div>
              <div>
                <aside className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi harum, doloremque porro similique enim vel maxime quas odit culpa, quos qui molestias doloribus. Porro saepe maxime recusandae blanditiis animi!
                </aside>
              </div>
            </div>
            <div className="flex items-center md:flex mx-20 my-20 max-w-5xl">
              <div>
                <aside>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus commodi exercitationem molestias necessitatibus praesentium sit itaque maiores, incidunt temporibus dolorem fuga hic id pariatur minus architecto doloremque labore! Dolorem!
                </aside>
              </div>
              <div className="mx-4 rounded-xl border-2">
                <img src={rcopLogo} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }