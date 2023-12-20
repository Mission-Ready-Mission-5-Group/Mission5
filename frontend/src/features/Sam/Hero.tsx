import React, { useEffect, useRef, useState } from 'react'
import heroimg from '../../assets/banner.jpg'
import "./Hero.css"
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
/* 
				<div className="absolute bg-[#333333] inset-0 flex justify-center items-center">
*/
type Places = "Parnell" | "NewMarket"

const Hero = () => {
	const [suburb, setSuburb] = useState<Places>("Parnell")
	const [placesIsOpened, setPlacesIsOpened] = useState<boolean>(false)

	const placesButton = useRef<HTMLDivElement>()

	useEffect(() => {
		const clickHandler = (e: MouseEvent) => {
			console.log(placesButton.current)
			if (placesButton.current && placesButton.current.contains(e.target as Node)) {
				console.log("CONTAINS")
			} else {
				console.log("NOT HAVE!")
				setPlacesIsOpened(false)
			}
		}

		document.addEventListener("mousedown", clickHandler)
		return () => document.removeEventListener("mousedown", clickHandler)
	}, [])

	return (
		<>
			<div className='relative '>
				<img
					src={heroimg}
					alt=""
					className="w-full object-cover  h-[500px]"
				/>
				<div className="absolute bg-black bg-opacity-10 inset-0 flex justify-center items-center">
					<div className="w-3/5 text-center bg-[#000] bg-opacity-40 flex p-6 rounded-2xl">
						<div className="dropdown" ref={placesButton}>
							<div tabIndex={0} role="button" className="btn m-1  w-[200px] flex justify-between" onClick={() => setPlacesIsOpened(true)}>
								<div>{suburb}</div>
								<div>{placesIsOpened ? <RiArrowDropUpLine size={25} /> : <RiArrowDropDownLine size={25} />}</div>
							</div>
							<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
								<li><a onClick={() => setSuburb("Parnell")}>Parnell</a></li>
								<li><a onClick={() => setSuburb("NewMarket")}>NewMarket</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero