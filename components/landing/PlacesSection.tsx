import { useState } from "react";
import { places } from "../../utils/data";
import { AiFillHeart, AiTwotoneStar } from "react-icons/ai";

type Props = {
	category: string;
};

const PlacesSection = ({ category }: Props) => {
	const [locations, setLocations] = useState(places);

	const filteredItems = locations?.filter((item) => {
		if (category?.toLowerCase() === "" || category?.toLowerCase() == "omg!")
			return true;
		else {
			return item?.category?.toLowerCase() === category?.toLowerCase();
		}
	});

	const toggleLikes = (id: number) => {
		const actual: any = locations?.map((item: LocationType) => {
			if (item.id === id) {
				return {
					...item,
					isLiked: !item.isLiked,
				};
			} else {
				return item;
			}
		});
		setLocations(actual);
	};

	return (
		<div className="w-full min-h-screen flex items-center px-4 lg:px-[44px] flex-wrap py-6">
			{filteredItems?.length == 0 ? (
				<div className="mx-auto py-5 flexed">
					<p>
						No places found for
						<span className="capitalize tracking-wide font-medium">
							&nbsp;{category}
						</span>
					</p>
				</div>
			) : (
				filteredItems?.map(
					({
						id,
						category,
						images,
						title,
						availableDate,
						cost,
						isLiked,
						rating,
					}: LocationType) => (
						<div className="w-full md:w-[45%] lg:w-[23%] mx-auto mb-10 relative">
							<div className="absolute top-3 right-4 text-sm h-7 w-7 bg-gray-200 flexed rounded-full">
								<AiFillHeart
									onClick={() => toggleLikes(id)}
									className={`curp text-lg ${isLiked ? "text-red-500" : ""}`}
								/>
							</div>
							<img
								src={images[0]}
								className="object-fill h-[200px] w-full rounded-lg "
								alt={title}
							/>
							<div className="flex-btw text-sm mt-2">
								<p className="font-semibold tracking-wide capitalize">
									{title}
								</p>
								<p className="flex items-center">
									<AiTwotoneStar className="mr-1 text-[16px]" />
									{rating}
								</p>
							</div>
							<p className="text-gray-400 text-sm">Hosted by Ayo Abimbola</p>
							<p className="text-gray-400 text-sm">{availableDate}</p>

							<div className="flex-btw mt-1">
								<p className="font-medium text-sm">
									$ {cost} / <span className="font-normal">night</span>
								</p>
								<h4 className="text-xs capitalize">{category}</h4>
							</div>
						</div>
					)
				)
			)}
		</div>
	);
};

export default PlacesSection;
