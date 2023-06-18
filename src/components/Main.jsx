import React from "react"

export default function Main() {
    return (
      <>
        <div className="main">

          <h2 className="flex justify-center py-4">About Us</h2>

          <div className="px-12 md:flex item-center">
            <div className="relative mx-auto w-60 h-60 my-20 rounded-xl lg:w-80 lg:h-80 border-2 border-black">
                <img alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
            </div>
            <div className="text-lg md:px-8 lg:px-16 md:mt-20 md:max-w-2xl">
              <h4 className="flex justify-center">Compassionate healthcare</h4>
              <p className="text-lg md:px-8 lg:px-16 mt-8 md:mt-2 md:max-w-2xl">
                Ada Fraser BSe. As healthcare changes so does provision, with more people requiring home visits. Home visits depend on patient's needs from routine nail cutting to more advanced services such as vascular or neurovascular assessments 
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex mx-20 my-20">
              <div className="w-20 h-20 mx-8 rounded-xl border-2 border-black">
                <img alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl" />college logo
              </div>
              <div>
                <aside className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi harum, doloremque porro similique enim vel maxime quas odit culpa, quos qui molestias doloribus. Porro saepe maxime recusandae blanditiis animi!
                </aside>
              </div>
            </div>
            <div className="flex mx-20 my-20">
              <div>
                <aside>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus commodi exercitationem molestias necessitatibus praesentium sit itaque maiores, incidunt temporibus dolorem fuga hic id pariatur minus architecto doloremque labore! Dolorem!
                </aside>
              </div>
              <div className="w-20 h-20 mx-8 rounded-xl border-2 border-black">
                <img alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl" />hcpc logo
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }