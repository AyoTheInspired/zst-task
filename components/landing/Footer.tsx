import { AiOutlineCopyright } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";

function Footer() {
	return (
		<footer className="w-full sticky bottom-0 bg-gray-100 min-h-12 py-4 side-pad flex items-center z-20">
			<div className="w-full hidden lg:inline-flex items-center justify-between">
				<div className="text-sm flex items-center font-light">
					<AiOutlineCopyright />
					<p>
						&nbsp;
						{new Date().getFullYear()} Airbnb, Inc. &nbsp;
					</p>
					<div className="flex items-center">
						<a className="footer-link">Privacy </a>&nbsp;·&nbsp;
						<a className="footer-link">Terms</a>&nbsp;·&nbsp;
						<a className="footer-link">Sitemap</a>&nbsp;·&nbsp;
						<a className="footer-link">Destinations</a>&nbsp;
					</div>
				</div>
				<div className="flex items-center text-sm">
					<div className="flex items-center space-x-2 mr-3">
						<BiGlobe className="text-lg" />
						<a className="footer-link">English (US)</a>
					</div>
					<div className="flex items-center space-x-2 mr-5">
						$&nbsp;<a className="footer-link">USD</a>
					</div>
					<div className="flex items-center space-x-2">
						<a className="footer-link flex items-center">
							Support & Resources <IoIosArrowUp className="text-lg ml-2" />{" "}
						</a>
					</div>
				</div>
			</div>

			<div className="lg:hidden flexed space-x-10 mx-auto">
				<div className="mob-item-wrap">
					<FaSearch className="mob-item-icon text-[#FF385C]" />
					<a className="mob-item-text font-semibold">Explore</a>
				</div>
				<div className="mob-item-wrap">
					<BsHeart className="mob-item-icon text-gray-300" />
					<a className="mob-item-text">Wishlists</a>
				</div>
				<div className="mob-item-wrap">
					<FaRegUserCircle className="mob-item-icon text-gray-300" />
					<a className="mob-item-text">Log in</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
