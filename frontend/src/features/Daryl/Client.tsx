import React from 'react'

const Client = () => {
  return (
    <div>
     <div className="carousel">
     <div id="slide1" className="carousel-item relative w-full flex items-center">
      <div className="w-full max-h-96 px-8 p-4 border border-black rounded-lg overflow-hidden text-center">
      <h1 className='text-2xl font-bold text-black'>Client Feedback</h1>
        <p className="text-black px-14 py-6" >
          "Awesome Service. After buying and selling properties over the years, this was the first time I had used Metro NZ and they way exceeded my expectations. From the outset, everything was so easy and seamless, stress-free and their customer service second to none."
        </p>
      </div>
      <div className="absolute flex justify-between left-5 right-5">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>

      {/* Repeat the structure for additional slides */}
      <div id="slide2" className="carousel-item relative w-full flex items-center">
        {/* Slide 2 content */}
        <div className="w-full max-h-96 px-8 p-4 border border-black rounded-lg overflow-hidden text-center">
        <h1 className='text-2xl font-bold text-black'>Client Feedback</h1>
          <p className="text-black px-14 py-6">
          "They provided top-notch service. Their team was professional, knowledgeable, and attentive. The entire process was smooth and stress-free. Highly recommended!"
          </p>
        </div>
        <div className="absolute flex justify-between left-5 right-5">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full flex items-center">
        {/* Slide 3 content */}
        <div className="w-full max-h-96 px-8 p-4 border border-black rounded-lg overflow-hidden text-center">
        <h1 className='text-2xl font-bold text-black'>Client Feedback</h1>
          <p className="text-black px-14 py-6">
          "Their commitment to excellence, personalized service, and responsiveness made the buying process a breeze. Truly a standout real estate partner."
          </p>
        </div>
        <div className="absolute flex justify-between left-5 right-5">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full flex items-center">
        {/* Slide 4 content */}
        <div className="w-full max-h-96 px-8 p-4 border border-black rounded-lg overflow-hidden text-center">
        <h1 className='text-2xl font-bold text-black'>Client Feedback</h1>
          <p className="text-black px-14 py-6">
          "Exceptional! Their expertise, attention to detail, and proactive communication set them apart. If you want a company that combines market knowledge with great service, choose them."
          </p>
        </div>
        <div className="absolute flex justify-between left-5 right-5">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Client