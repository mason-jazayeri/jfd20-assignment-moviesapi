import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function TopMoviesList({ listTitle }) {
	const { title, link } = listTitle;
	const [topMoviesData, setTopMoviesData] = useState({
		data: [],
		metadata: {},
	});
	const { data, metadata } = topMoviesData;

	useEffect(function () {
		axios
			.get(
				`https://moviesapi.codingfront.dev/api/v1/movies?page=${title}`
			)
			.then(function (res) {
				setTopMoviesData(res.data);
				console.log(res.data);
			})
			.catch(function (err) {
				console.log(err);
			});
	}, []);

	function renderFarm() {
		return data.map(function (item) {
			return (
				<li key={item.id}>
					<Link to={`/movies/${item.id}`}>
						<div className="top-movie-item">
							<div className="item-poster">
								<img src={item.poster} />
							</div>
							<h5>{item.title}</h5>
						</div>
					</Link>
				</li>
			);
		});
	}

	function renderListTitle() {
		if (title === 1) {
			return <h4>Top Movies: {title}st 10-item Series</h4>;
		} else if (title === 2) {
			return <h4>Top Movies: {title}nd 10-item Series</h4>;
		} else if (title === 3) {
			return <h4>Top Movies: {title}rd 10-item Series</h4>;
		} else {
			return <h4>Top Movies: {title}th 10-item Series</h4>;
		}
	}

	return (
		<div className="top-movies-list">
			<div className="list-title">
				{renderListTitle()}
				<Link to={link}>Show all</Link>
			</div>
			<div className="list-items">
				<ul>{renderFarm()}</ul>
			</div>
		</div>
	);
}

export default TopMoviesList;
