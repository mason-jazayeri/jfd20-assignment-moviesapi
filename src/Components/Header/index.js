import { Link } from "react-router-dom";
import TopMenuNavbar from "../TopMenuNavbar";
import "./style.css";

function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className="header-container">
					<div className="logo">
						<Link to="/">
							<h1>Top Movies</h1>
						</Link>
					</div>
					<TopMenuNavbar />
					<div className="search-bar">
						<input />
						<button>Search</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
