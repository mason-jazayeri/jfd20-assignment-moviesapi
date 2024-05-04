import { useState } from "react";
import ChildComponent from "../../Components/ChildComponent";

function ParentComponent() {
	const [dataFromChild, setDataFromChild] = useState(null);

	function handleDataFromChild(data) {
		setDataFromChild(data);
	}

	return (
		<div>
			<ChildComponent sendDataToParent={handleDataFromChild} />
			<p>Data received from child: {dataFromChild}</p>
		</div>
	);
}

export default ParentComponent;
