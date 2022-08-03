import React from "react";
import ContentRow from "./ContentRow";
import CategoriesInDb from "./CategoriesInDb";
import LastMovieInDb from "./LastMovieInDb";
function ContentRowTop() {
	return (
		<div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
			<ContentRow />

			{/* <!-- Content Row Last Movie in Data Base --> */}
			<div className="row">
				<LastMovieInDb
					title="Mandalorian"
					image="mandalorian.jpg"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
						consequatur explicabo officia inventore libero veritatis iure
						voluptate reiciendis a magnam, vitae, aperiam voluptatum non
						corporis quae dolorem culpa citationem ratione aperiam voluptatum
						non corporis ratione aperiam voluptatum quae dolorem culpa ratione
						aperiam voluptatum?"
					alt="Star Wars - Mandalorian"
				/>
				<CategoriesInDb />
			</div>
		</div>
	);
}
export default ContentRowTop;
