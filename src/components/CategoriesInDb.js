import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

function CategoriesInDb() {
	const [categoriesList, setCategoriesList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/api/products")
			.then((response) => response.json())
			.then((data) => setCategoriesList(data.countByCategory));
	}, []);
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold title">Categorías</h5>
				</div>
				<div className="card-body">
					<div className="row">
						{categoriesList.map((category, index) => {
							return <CategoryCard {...category} key={index} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoriesInDb;
