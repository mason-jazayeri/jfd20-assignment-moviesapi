import MainLayout from "../../Components/Layouts/MainLayout";
import renderPageTitle from "../../helpers/renderPageTitle";
import { useEffect } from "react";

function AllMoviesListPage() {
	useEffect(function () {
		renderPageTitle("All Movies List");
	}, []);
	return (
		<MainLayout>
			<h1>All Movies List Page</h1>
		</MainLayout>
	);
}

export default AllMoviesListPage;
