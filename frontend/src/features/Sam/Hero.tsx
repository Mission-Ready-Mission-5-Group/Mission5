import React, { useEffect, useRef, useState } from 'react'
import heroimg from '../../assets/banner.jpg'
import "./Hero.css"
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
/* 
				<div className="absolute bg-[#333333] inset-0 flex justify-center items-center">
*/
type Places = "Parnell" | "NewMarket"
type Filter = 'Gyms' | 'Parks' | 'Supermarkets' | 'Cinemas' | 'Swimming Pools' | "Pet Friendly" | "Has Elevators" | "Furnished"

type FilterVar = "city" | "petFriendly" | "hasElevators" | "furnished" | "gym" | "park" | "supermarket" | "cinema" | "swimmingPool"

const varToDisplayString = {
	city: "City",
	petFriendly: "Pet Friendly",
	hasElevators: "Has Elevator",
	furnished: "Furnished",
	gym: "Gyms",
	park: "Parks",
	supermarket: "Supermarkets",
	cinema: "Cinemas",
	swimmingPool: "Swimming Pools",
}

// city, petFriendly, hasElevators, furnished, gym, park, supermarket, cinema, swimmingPool
/* 'gym', 'park', 'supermarket', 'cinema', 'swimmingPool' */
const Hero = () => {
	// Place
	const [place, setPlace] = useState<Places>("Parnell")
	const [placesIsOpened, setPlacesIsOpened] = useState<boolean>(false)
	const placesButtonRef = useRef<HTMLDivElement>()

	// Filters
	const [filters, setFilters] = useState<FilterVar[]>([])
	const [filtersIsOpen, setFiltersIsOpen] = useState<boolean>(false)
	const filtersButtonRef = useRef<HTMLDivElement>()

	// Methods
	const addFilter = (newFilter: FilterVar) => {
		setFilters(filters => {
			const newFilters = filters.includes(newFilter) ? filters : [newFilter, ...filters]
			console.log("filters after add\t", newFilters)
			return newFilters
		})
	}

	const removeFilter = (filterToRemove: FilterVar) => {
		setFilters(filters => {
			const remainingFilters = filters.filter(filter => filter !== filterToRemove)
			console.log("filters after remove\t", remainingFilters)
			return remainingFilters
		})

	}


	// Hooks
	useEffect(() => {
		const clickHandler = (e: MouseEvent) => {
			console.log(placesButtonRef.current)
			if (!(placesButtonRef.current && placesButtonRef.current.contains(e.target as Node))) setPlacesIsOpened(false)
			if (!(filtersButtonRef.current && filtersButtonRef.current.contains(e.target as Node))) setFiltersIsOpen(false)

		}

		document.addEventListener("mousedown", clickHandler)
		return () => document.removeEventListener("mousedown", clickHandler)
	}, [])

	return (
		<>
			<div className='relative '>
				{/* Background */}
				<img
					src={heroimg}
					alt=""
					className="w-full object-cover  h-[500px]"
				/>

				<div className="absolute bg-black bg-opacity-10 inset-0 flex justify-center items-center note-covers-image-to-allow-centering-of-insides">
					<div className="text-center bg-[#000] bg-opacity-40 flex p-6 rounded-2xl flex-col note-this-is-the-container-for-all-the-search-related-elements">{/* w-3/5  */}

						<div className='flex search-layer'>

							{/* Location Button */}
							<div className="dropdown" ref={placesButtonRef}>
								<div tabIndex={0} role="button" className="btn m-1  w-[200px] flex justify-between" onClick={() => setPlacesIsOpened(true)}>
									<div>{place}</div>
									<div>{placesIsOpened ? <RiArrowDropUpLine size={25} /> : <RiArrowDropDownLine size={25} />}</div>
								</div>
								<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
									<li><a onClick={() => setPlace("Parnell")}>Parnell</a></li>
									<li><a onClick={() => setPlace("NewMarket")}>NewMarket</a></li>
								</ul>
							</div>

							{/* Filter Button */}
							<div className="dropdown" ref={filtersButtonRef}>
								<div tabIndex={0} role="button" className="btn m-1  w-[200px] flex justify-between" >
									<div>Select Filter</div>
									<div>{filtersIsOpen ? <RiArrowDropUpLine size={25} /> : <RiArrowDropDownLine size={25} />}</div>
								</div>
								<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
									<li><a onClick={() => addFilter("gym")}>Gyms</a></li>
									<li><a onClick={() => addFilter("park")}>Parks</a></li>
									<li><a onClick={() => addFilter("supermarket")}>Supermarkets</a></li>
									<li><a onClick={() => addFilter("cinema")}>Cinemas</a></li>
									<li><a onClick={() => addFilter("swimmingPool")}>Swimming Pools</a></li>
									<li><a onClick={() => addFilter("petFriendly")}>Pet Friendly</a></li>
									<li><a onClick={() => addFilter("hasElevators")}>Has Elevators</a></li>
									<li><a onClick={() => addFilter("furnished")}>Furnished</a></li>
								</ul>
							</div>
						</div>
						<div className='flex flex-wrap'> {/*  bg-[#500] */}
							{
								filters.map(filter => (
									<span className="badge m-1 cursor-pointer" key={filter} onClick={() => removeFilter(filter)}>{varToDisplayString[filter]} <span className='relative top-0.5 pl-1'><RxCross1 size={8} /></span></span>
								))
							}
						</div>
					</div>
				</div>


			</div>
		</>
	);
};

export default Hero