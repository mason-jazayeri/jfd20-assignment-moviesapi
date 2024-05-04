import MainLayout from "../../Components/Layouts/MainLayout";
import MovieItem from "../../Components/MovieItem";
import renderPageTitle from "../../helpers/renderPageTitle";
import { useState, useEffect } from "react";

function SingleMovieItemPage() {
	const [movieTitle, setMovieTitle] = useState("");

	function handleDataFromMovieItem(data) {
		setMovieTitle(data);
	}

	return (
		<MainLayout>
			<MovieItem
				sendDataToSingleMovieItemPage={handleDataFromMovieItem}
			/>
			{renderPageTitle(movieTitle)}
		</MainLayout>
	);
}

export default SingleMovieItemPage;
