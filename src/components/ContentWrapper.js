import React from "react";
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import Footer from "./Footer";
import ProductList from "./ProductList";

function ContentWrapper() {
	return (
		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				<TopBar />
				<ContentRowTop />
				<ProductList />
				<Footer />
			</div>
		</div>
	);
}

export default ContentWrapper;
