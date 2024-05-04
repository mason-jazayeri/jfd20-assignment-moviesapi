import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../Pages/HomePage";
import AllMoviesListPage from "../../Pages/AllMoviesListPage";
import SingleMovieItemPage from "../../Pages/SingleMovieItemPage";
import ParentComponent from "../../Pages/ParentComponent";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/movies",
		element: <AllMoviesListPage />,
	},
	{
		path: "/movies/:movieId",
		element: <SingleMovieItemPage />,
	},
	{
		path: "/parent",
		element: <ParentComponent />,
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
