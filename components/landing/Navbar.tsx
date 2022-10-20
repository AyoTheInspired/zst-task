import Image from "next/image";
import { BiGlobe, BiMenu, BiSearchAlt2 } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";

function Navbar() {
	return (
		<nav className="sticky top-0 px-4 lg:px-8 w-full border-b border-gray-200">
			<div className="flex items-center justify-between py-3.5">
				<div>
					<Image
						src="https://links.papareact.com/qd3"
						width={120}
						height={50}
						objectPosition="left"
						className="object-contain curp"
					/>
				</div>
				<div className="hidden lg:inline-flex items-center space-x-3 border border-gray-200 rounded-full px-5 py-2 shadow-md divide-x divide-gray-10 min-w-[330px] curp">
					<p className="mid-item-bold">Anywhere</p>
					<p className="mid-item-bold pl-2">Any week</p>
					<p className="mid-item pl-2 mr-[150px]">Add guests</p>

					<div className="h-8 w-8 pry-bg flexed rounded-full">
						<BiSearchAlt2 className="text-white" />
					</div>
				</div>
				<div className="flexed space-x-3">
					<p className="font-medium text-sm curp hover:bg-gray-100 transition-colors rounded-xl px-4 py-2.5 hidden lg:inline">
						Become a host
					</p>

					<div className="hover:bg-gray-100 transition-colors rounded-full p-2 flexed curp hidden lg:inline">
						<BiGlobe />
					</div>

					<div className="curp rounded-[14px] flexed text-xl items-center pl-2 border border-gray-200 hover:shadow-md transition-all">
						<BiMenu />
						<div>
							<HiUserCircle className="text-4xl ml-2.5 text-gray-400" />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="">icon filters</div> */}
		</nav>
	);
}

export default Navbar;
