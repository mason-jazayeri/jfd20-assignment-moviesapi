import { useState } from "react";

function ChildComponent({ sendDataToParent }) {
	const [data, setData] = useState("Hello from child!");
	function handleClick() {
		sendDataToParent(data); // Pass data to parent component
	}

	return (
		<div>
			<button onClick={handleClick}>Send Data to Parent</button>
		</div>
	);
}

export default ChildComponent;
