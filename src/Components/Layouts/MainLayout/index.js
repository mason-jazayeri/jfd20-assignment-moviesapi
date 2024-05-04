import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

function MainLayout({ children }) {
	return (
		<Fragment>
			<Header />
			<div className="main-section">
				<div className="container">
					<div className="main-section-container">{children}</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default MainLayout;
