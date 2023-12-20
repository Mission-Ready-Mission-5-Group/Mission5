import React from 'react';

const AboutUs = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div className="flex-1 basis-[18rem]">
          <div className="relative overflow rounded-lg">
            <img
              src="../../assets/houses/house13.jpg"
              alt=""
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute top-0 left-0 flex-col w-full h-full bg-black/50 flex-center-center">
              <div className="icon-box !text-primary !bg-transparent border !border-primary relative before:absolute before:w-full before:h-full before:rounded-full before:animate-ping before:bg-primary/60"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 basis-[18rem] text-center">
          <h1 className="heading">About Us</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            earum, laboriosam soluta, sit natus corporis ab ullam vel voluptates
            inventore ipsa repudiandae minus? Non, deleniti! Quos reiciendis
            saepe voluptatem accusantium nemo praesentium reprehenderit nostrum
            veritatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
