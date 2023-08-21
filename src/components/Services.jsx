import React from "react"
import feet1 from "../assets/feet1.jpg"
import feet2 from "../assets/feet2.jpg"
import feet3 from "../assets/feet3.jpg"
import feet4 from "../assets/feet4.jpg"
import feet5 from "../assets/feet5.jpg"

export default function Services() {

    return (
      <>
        <div id="services" className="pt-20 md:pt-60 bg-amber-100">
          <h2 className="flex justify-center py-4 font-serif font-extrabold text-pink-500 text-lg">TREATMENTS</h2>
          <div className="bg-pink-200 p-10 md:p-20 mx-10 lg:mx-40">
            <ul>
              <li>
                <div className="p-2">             
                    <span className="font-bold mr-2">Routine care:</span> Foot and nail care. This includes ensuring your nails are <span className="text-pink-700 underline"><a href="https://northwichfootclinic.co.uk/ingrown-toenail/">properly cut</a></span> and filed on a regular basis, as well as reducing nail thickness, removing any hard skin, and offering general advice on foot maintenance. These tasks become increasingly important as we age, particularly if mobility is reduced, or they are difficult for you to perform yourself.
                </div>
              </li>
              <li>
                <div className="p-2">
                <span className="font-bold mr-2">Corns:</span> Weight-bearing parts of your feet are prone to corns, due to the high pressure experienced in these areas. While some corns can be passive and do not cause any real issue, others can be incredibly painful.
                </div>
              </li>
              <li>
                <div className="p-2">
                <span className="font-bold mr-2">Calluses/ Hard skin:</span> We have all experienced those uncomfortable, unsightly, thick yellow patches of skin on our feet. <span className="text-pink-700 underline"><a href="https://northwichfootclinic.co.uk/foot-callus-removal/">Calluses</a></span> not only look bad, but they can also be very painful. Usually caused by that area of your foot being exposed to an excessive amount of friction pressure, calluses are easily dealt with. Diabetic patients are also prone to callus and should be reduced by a skilled podiatrist. 
                </div>
              </li>
              <li>
                <div className="p-2">
                <span className="font-bold mr-2">Involuted Nails:</span> Involuted toenails are nails that curve and press down the sides (the technical term is nail sulci). The nails press down into the sulci, causing a build-up of hard skin. This can be painful, especially if the nail itself is a bit thick or the shoes are squashing the toe.
                </div>
              </li>
            </ul>
          </div>

          {/* <div className="flex flex-col gap-10 mx-4 md:mx-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl shadow-pink-400 rounded-2xl p-4">            
              <h1 className="my-4 font-serif text-pink-500 text-lg">Nail Cutting</h1> 
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet3} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
              <div className="my-4 font-serif">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro nesciunt commodi rem dicta facere accusamus necessitatibus, nemo sequi laboriosam nulla voluptas a molestias quasi veritatis quo ratione! Qui, natus?
              </div>             
            </div> 
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl shadow-pink-400 rounded-2xl p-4">            
              <h1 className="my-4 font-serif text-pink-500 text-lg">Corn, calluses and craked skin</h1>
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet1} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div> 
              <div className="my-4 font-serif">
                Are you suffering from a foot pain and living in or around Edinurgh ? We will always do out best to try and fit you in as quickly as possible especialy if you are suffering with painfull feet. 
              </div>             
            </div> 
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl shadow-pink-400 rounded-2xl p-4">            
              <h1 className="my-4 font-serif text-pink-500 text-lg">Verrucas, fungal infections, ingrowing toe nails</h1> 
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet2} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
              <div className="my-4 font-serif">
                  It's especially important to look after your feet if you have diabetes. We are here to give you the help and guidance you need to looking after your feet.
              </div>             
            </div> 
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl rounded-2xl shadow-pink-400 p-4">            
              <h1 className="my-4 font-serif text-pink-500 text-lg">Advice on footwear</h1> 
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet5} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
              <div className="my-4 font-serif">
                  We offer expert footwear advice personalized to your needs, all from the comfort of your home. Our experienced team of podiatrists understands the importance of proper footwear for foot health and overall well-being. Whether you're dealing with diabetic foot concerns or looking for comfortable, supportive shoes, we're here to help. We'll assess your unique foot requirements and provide tailored recommendations to ensure you find the perfect fit.
              </div>             
            </div> 
            <div className="flex-1 m-8 md:basis-1/4 shadow-2xl rounded-2xl shadow-pink-400 p-4">            
              <h1 className="my-4 font-serif text-pink-500 text-lg">Diabetic care</h1> 
              <div className="relative mx-auto w-60 h-60 rounded-xl lg:w-80 lg:h-80">
                <img src={feet4} alt="img" layout="fill" className="object-cover w-full h-auto rounded-xl"></img>
              </div>
              <div className="my-4 font-serif">
                  It's especially important to look after your feet if you have diabetes. We are also specialized in providing diabetic foot care in the comfort of your home. Our experienced team offers comprehensive and personalized services, ensuring convenience and high-quality care for your foot health. Let us be your trusted partners in managing diabetes-related foot conditions, right at your doorstep.
              </div>             
            </div> 
          </div> */}

        </div>      
      </>
    )
  }