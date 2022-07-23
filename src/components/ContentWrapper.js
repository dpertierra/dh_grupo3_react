import React from "react";
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import MovieList from "./MovieList";
import Footer from "./Footer";

function ContentWrapper() {
	return (
		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				<TopBar />
				<ContentRowTop />
				<MovieList />
				<Footer />
			</div>
		</div>
	);
}

export default ContentWrapper;
