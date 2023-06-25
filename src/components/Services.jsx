import React from "react"
import feet1 from "../assets/feet1.jpg"
import feet2 from "../assets/feet2.jpg"
import feet3 from "../assets/feet3.jpg"
import feet4 from "../assets/feet4.jpg"
import feet5 from "../assets/feet5.jpg"

export default function Services() {

    // const {
    //   title,
    //   description
    // } = props

    return (
      <>
        <div id="services" className="pt-60">
          <h2 className="flex justify-center py-4">How We Help</h2>
          <div className="flex flex-col gap-10 mx-4 md:mx-10 lg:flex-row lg:flex-wrap">
   
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl rounded-2xl p-4">            
              <h1 className="my-4 font-SpecialElite">Nail Cutting</h1> 
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet3} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
              <div className="my-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro nesciunt commodi rem dicta facere accusamus necessitatibus, nemo sequi laboriosam nulla voluptas a molestias quasi veritatis quo ratione! Qui, natus?
              </div>             
            </div> 

            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl rounded-2xl p-4">            
              <h1 className="my-4 font-SpecialElite">CORNS, CALLUSES/CRACKED SKIN</h1>
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet1} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div> 
              <div className="my-4">
                Are you suffering from a foot pain and living in or around Edinurgh ? We will always do out best to try and fit you in as quickly as possible especialy if you are suffering with painfull feet. 
              </div>             
            </div> 

            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl rounded-2xl p-4">            
              <h1 className="my-4 font-SpecialElite">VERRUCAS, FUNGAL INFECTION OF NAILS</h1> 
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet2} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
              <div className="my-4">
                It's especially important to look after your feet if you have diabetes. We are here to give you the help and guidance you need to looking after your feet.
              </div>             
            </div> 

            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl rounded-2xl p-4">            
              <h1 className="my-4 font-SpecialElite">ADVICE ON FOOTWEAR, INGROWING TOE NAILS</h1> 
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet5} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
              <div className="my-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro nesciunt commodi rem dicta facere accusamus necessitatibus, nemo sequi laboriosam nulla voluptas a molestias quasi veritatis quo ratione! Qui, natus?
              </div>             
            </div> 

            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl rounded-2xl p-4">            
              <h1 className="my-4 font-SpecialElite">DIABETIC CARE</h1> 
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet4} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
              <div className="my-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro nesciunt commodi rem dicta facere accusamus necessitatibus, nemo sequi laboriosam nulla voluptas a molestias quasi veritatis quo ratione! Qui, natus?
              </div>             
            </div> 

          </div>
        </div>      
      </>
    )
  }