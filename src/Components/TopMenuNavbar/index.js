import topMenuNavbar from "../../data/topMenuNavbar";
import "./style.css";

function TopMenuNavbar() {
	function renderFarm() {
		return topMenuNavbar.map(function (item) {
			return <li key={item.id}>{item.menuItem}</li>;
		});
	}

	return (
		<div className="navbar">
			<ul>{renderFarm()}</ul>
		</div>
	);
}

export default TopMenuNavbar;
