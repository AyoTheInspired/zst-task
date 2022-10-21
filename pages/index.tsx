import type { NextPage } from "next";
import { useState } from "react";
import { Footer, Header, HeadTag, PlacesSection } from "../components";

const Home: NextPage = () => {
	const [category, setCategory] = useState("");

	return (
		<>
			<HeadTag />
			<Header category={category} setCategory={setCategory} />
			<PlacesSection category={category} />
			<Footer />
		</>
	);
};

export default Home;
