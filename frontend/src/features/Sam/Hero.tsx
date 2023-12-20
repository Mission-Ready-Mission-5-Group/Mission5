import React from 'react'
import heroimg from '../../assets/banner.jpg'
import "./Hero.css"


/* 
				<div className="absolute bg-[#333333] inset-0 flex justify-center items-center">
*/
const Hero = () => {
	const test = true
	const bg1 = true && '#333333';
	const bg2 = test && '#FFFF';
	return (
		<>
			<div className='relative '>
				<img
					src={heroimg}
					alt=""
					className="w-full object-cover  h-[500px]"
				/>
				<div className={`absolute bg-${bg1} inset-0 flex justify-center items-center`}>
					<div className={`w-96 text-center bg-${"black"}`}>
						<p>Your content here</p>
						<p>Your content here</p>
						<p>Your content here</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero