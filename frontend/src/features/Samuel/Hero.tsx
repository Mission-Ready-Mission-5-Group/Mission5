import React from 'react'
import heroimg from '../../assets/banner.jpg'

const Hero = () => {
	return (
		<div className="">
			<div className="h-[500px] relative">
				<img
					src={heroimg}
					alt=""
					className="w-full h-full object-cover"
				/>

				<div className="absolute  w-full bg-slate-50 w-11/12">
					{/* adasssssssssssssssssssssssssssssssssssssssssssssssssssss */}
					<div className=" bg-white w-11/12 xl:w-4/5 m-auto grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-5 md:rounded-md">
						
					</div>

				</div>
			</div>

		</div>
	);
};

export default Hero