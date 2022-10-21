import { categories } from "../../utils/data";
import { VscListFilter } from "react-icons/vsc";

type Props = {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
};

function CategoryFilters({ category, setCategory }: Props) {
	return (
		<div className="side-pad flex items-center sticky top-[75px] h-24  bg-white shadow-xs z-10">
			<div className="flex items-center ovs">
				{categories.map(({ imgPath, title }: FilterItem) => (
					<div
						onClick={() => setCategory(title)}
						key={title}
						className="flexed flex-col mr-8 group curp transition-all">
						<img width={25} src={imgPath} alt={title} />
						<p
							className={`capitalize whitespace-nowrap text-xs font-light mt-1 pb-2 group-hover:border-b-2  transition-all ${
								category === title
									? "font-semibold border-b-2 border-gray-600 cursor-default"
									: "group-hover:border-gray-300"
							}`}>
							{title}
						</p>
					</div>
				))}
			</div>
			<div className="flex items-center p-3 rounded-xl border-2 border-gray-300 ml-4 font-semibold curp">
				<VscListFilter />
				<p className="text-sm ml-2">Filters</p>
			</div>
		</div>
	);
}

export default CategoryFilters;
