import React from "react";
import ContentRow from "./ContentRow";
import CategoriesInDb from "./CategoriesInDb";
import LastProduct from "./LastProduct";
function ContentRowTop() {
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
			<ContentRow />

			<div className="row">
				<LastProduct />
				<CategoriesInDb />
			</div>
		</div>
	);
}
export default ContentRowTop;
