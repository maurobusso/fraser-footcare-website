import React from "react"
import rcopLogo from "../assets/RCOP-logo.png"
import ada1 from "../assets/ada1.jpg"
import ada3 from "../assets/ada3.jpg"
import HCPC from "../assets/hcpc-logo.png"

export default function Main() {
    return (
      <>
        <div className="main px-16 md:px-40 flex flex-col bg-amber-100">

          <h2 className="flex justify-center py-8 md:py-20 font-serif font-extrabold text-pink-500 text-lg">About Us</h2>
          <div className="flex justify-center py-8">
            <p className="md:max-w-2xl text-lg border-l-8 border-pink-600 pl-4 md:pl-10">
              We are specilists in home visits, giving you the time and flexibility to manage your appointment with us. You do not need to provide towels etc. All our equipment, dressings and creams etc. are carried with us so all you need to do is provide a space for our assessment and treatment services to take place.
              <br/>
              <br/>
              We perform foot health home visits for Edinburgh residents who are suffering from mobility or mental health issues which prevent them from attending a chiropodist clinic easily.
            </p>
          </div>
          <div className="pb-24 md:flex md:items-center">
            <div className="mx-auto w-60 h-60 my-20 rounded-xl md:w-80 md:h-80">
                <img src={ada1} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
            </div>
            <div className="text-lg md:px-8 md:mt-20 md:max-w-2xl">
              <h4 className="flex justify-center pt-8">Compassionate healthcare</h4>
              <p className="text-lg mt-8 md:mt-2 md:max-w-2xl border-l-8 border-pink-600 pl-4 md:pl-10">
                Ada Fraser BSe. As healthcare changes so does provision, with more people requiring home visits. Home visits depend on patient's needs from routine nail cutting to more advanced services such as vascular or neurovascular assessments 
              </p>
            </div>
          </div>
          <div className="pb-24 md:flex md:items-center">
            <div className="mx-auto w-60 h-60 my-28 rounded-xl lg:w-80 lg:h-80 md:hidden">
                <img src={ada3} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
            </div>
            <div className="text-lg md:px-8 md:mt-20 md:max-w-2xl ">
              <p className="text-lg mt-8 md:mt-2 md:max-w-2xl border-r-8 border-pink-600 pr-2 md:pr-10">
                All our foot health services are carried out by a fully qualified foot health practitioner. Who are registerred with the HCPC and the Royal College of Podiatry. 
              </p>
              <div className="flex justify-center my-4">
                <div className="rounded-xl m-4 w-20 h-20">
                  <img src={rcopLogo} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl" />
                </div>
                <div className="rounded-xl m-4 w-20 h-20">
                  <img src={HCPC} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl" />
                </div>
              </div>
            </div>
            <div className="hidden md:block mx-auto w-60 h-60 my-28 rounded-xl lg:w-80 lg:h-80 item-center">
              <img src={ada3} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
            </div>
          </div>
        <div className="border-b-4 border-pink-600 mx-4 md:mx-10 lg:mx-30"></div>
        </div>
      </>
    )
  }