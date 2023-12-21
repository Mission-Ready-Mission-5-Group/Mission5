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
    <div id="slide2" className="carousel-item relative w-full">
      <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
      <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Client