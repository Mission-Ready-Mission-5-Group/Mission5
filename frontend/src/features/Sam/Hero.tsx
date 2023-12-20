import React from 'react'
import heroimg from '../../assets/banner.jpg'
import "./Hero.css"

const Hero = () => {
	
	return (
		<>
			<div className='relative'>
				<img
				src={heroimg}
				alt=""
				className="w-full object-cover  h-[500px]"
				/>
				<div className="black-background"> hiaskdjashd kjashd ksah dksahkashdkjh</div>
			</div>
		</>
	);
};

export default Hero