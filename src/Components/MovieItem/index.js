import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import renderPageTitle from "../../helpers/renderPageTitle";
import "./style.css";

function MovieItem() {
	const { movieId } = useParams();

	const [data, setData] = useState({
		title: "",
		plot: "",
		poster: "",
	});
	const { title, plot, poster } = data;

	const [movieTitle, setMovieTitle] = useState();
	function handleLoad() {
		renderPageTitle(movieTitle);
	}

	useEffect(
		function () {
			axios
				.get(
					`https://moviesapi.codingfront.dev/api/v1/movies/${movieId}`
				)
				.then(function (res) {
					setData(res.data);
					setMovieTitle(res.data.title);
					console.log(res.data);
				})
				.catch(function (err) {
					console.log(err);
				});
		},
		[movieId]
	);
	return (
		<div className="movie-item" onLoad={handleLoad}>
			<div className="item-poster">
				<img src={poster} alt="" />
			</div>
			<div className="item-content">
				<h2>{title}</h2>
				<p>{plot}</p>
			</div>
		</div>
	);
}

export default MovieItem;
