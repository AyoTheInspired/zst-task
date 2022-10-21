import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type Props = {
	images: string[];
};

function Slider({ images }: Props) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Carousel
			showThumbs={false}
			showStatus={false}
			renderArrowNext={(onClickHandler, hasNext, label) =>
				hasNext && (
					<div className="absolute z-[2] top-1/2 w-6 h-6 rounded-full bg-white shadow-sm flexed curp right-5 ">
						<BiChevronRight
							onClick={onClickHandler}
							title={label}
							className=""
						/>
					</div>
				)
			}
			renderArrowPrev={(onClickHandler, hasNext, label) =>
				hasNext && (
					<div className="absolute z-[2] top-1/2 w-6 h-6 rounded-full bg-white shadow-sm flexed curp left-5 ">
						<BiChevronLeft
							onClick={onClickHandler}
							title={label}
							className=""
						/>
					</div>
				)
			}>
			{images?.map((item: string) => (
				<img
					onMouseEnter={() => setIsHovered(!isHovered)}
					src={item}
					className="object-fill h-[230px] w-full rounded-lg "
					alt={item}
				/>
			))}
		</Carousel>
	);
}

export default Slider;
