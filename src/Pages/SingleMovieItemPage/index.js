import MainLayout from "../../Components/Layouts/MainLayout";
import MovieItem from "../../Components/MovieItem";
import renderPageTitle from "../../helpers/renderPageTitle";

function SingleMovieItemPage() {
	function handleDataFromMovieItem(data) {
		renderPageTitle(data);
	}

	return (
		<MainLayout>
			<MovieItem
				sendDataToSingleMovieItemPage={handleDataFromMovieItem}
			/>
		</MainLayout>
	);
}

export default SingleMovieItemPage;
