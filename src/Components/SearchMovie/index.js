import { useState } from "react";
import axios from "axios";

function SearchMovie() {
	const [searchResault, setSearchResault] = useState({
		data: [],
		metaData: {},
	});
	const { data } = searchResault;

	function searchMovie() {
		const inputValue = document.getElementById("input").value;
		axios
			.get(
				`https://moviesapi.codingfront.dev/api/v1/movies?q=${inputValue}`
			)
			.then(function (res) {
				console.log(res.data);
				setSearchResault(res.data);
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	function renderFarm() {
		return data.map(function (item) {
			return <li key={item.id}>{item.title}</li>;
		});
	}

	return (
		<div className="search-bar">
			<div className="input-box">
				<input
					id="input"
					onChange={searchMovie}
					placeholder="Enter movie name or part of it."
				/>
				<div className="search-resault-box">
					<ul>{renderFarm()}</ul>
				</div>
			</div>
			<button>Search</button>
		</div>
	);
}

export default SearchMovie;
