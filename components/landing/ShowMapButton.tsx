import { BsMapFill } from "react-icons/bs";

function ShowMapButton() {
	return (
		<div className="hidden lg:flexed sticky bottom-24 h-full z-20 ">
			<button className="rounded-3xl bg-gray-800 mx-auto l active:scale-90 transition-all px-5 py-2.5 text-white text-sm flex items-center hover:scale-105 hover:shadow-xl">
				<span>Show map</span>
				<BsMapFill className="ml-2 mt-[2px]" />
			</button>
		</div>
	);
}

export default ShowMapButton;
