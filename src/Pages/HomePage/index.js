import MainLayout from "../../Components/Layouts/MainLayout";
import TopMoviesList from "../../Components/TopMoviesList";
import renderPageTitle from "../../helpers/renderPageTitle";
import { useEffect } from "react";

function HomePage() {
	useEffect(function () {
		renderPageTitle("250 Top Movies of IMDB");
	}, []);
	return (
		<MainLayout>
			<TopMoviesList
				listTitle={{
					title: 1,
					link: "/movies",
				}}
			/>
			{/* <TopMoviesList
				listTitle={{
					title: 2,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 3,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 4,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 5,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 6,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 7,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 8,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 9,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 10,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 11,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 12,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 13,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 14,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 15,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 16,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 17,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 18,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 19,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 20,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 21,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 22,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 23,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 24,
					link: "/movies",
				}}
			/>
			<TopMoviesList
				listTitle={{
					title: 25,
					link: "/movies",
				}}
			/> */}
		</MainLayout>
	);
}

export default HomePage;
