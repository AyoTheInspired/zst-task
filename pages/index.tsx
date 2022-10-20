import type { NextPage } from "next";
import { HeadTag, Navbar } from "../components";

const Home: NextPage = () => {
	return (
		<>
			<HeadTag />

			<Navbar />
			<main className="w-full lg:w-[95%] mx-auto">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni
				reiciendis natus. Eligendi doloribus consequatur ad quibusdam temporibus
				praesentium sapiente nisi libero maiores fugiat. Error nam molestias
				alias quidem perferendis dolor, maiores tempore ullam, repellat
				reprehenderit odio eligendi. Cupiditate sapiente doloribus suscipit
				voluptates dolorum inventore iusto ex facilis veritatis beatae.
			</main>
		</>
	);
};

export default Home;
