import type { NextPage } from "next";
import { useState } from "react";
import {
	Footer,
	Header,
	HeadTag,
	PlacesSection,
	ShowMapButton,
} from "../components";

const Home: NextPage = () => {
	const [category, setCategory] = useState("");

	return (
		<>
			<HeadTag />
			<Header category={category} setCategory={setCategory} />
			<PlacesSection category={category} />
			<ShowMapButton />
			<Footer />
		</>
	);
};

export default Home;
