import React, { useState } from "react";
import {useState} from 'react';

const estado = useState ([
	fetch("http://localhost:3001/api/products")
	.then(response => response.json())
	.then(data =>this.state({ categories: data.countByCategory}))
]);
const categoriesList = estado[0];
const setCategoriesList =  estado[1];

function CategoriesInDb() {
	const [category];

	useState([categoriesList, setCategoriesList])
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold text-gray-800">
						Categories
					</h5>
				</div>
				<div className="card-body">
					<div className="row">
						{this.state.categories.map((category, index) => {
							return (
								<div className="col-lg-6 mb-4" key={category.category + index}>
									<div className="card bg-dark text-white shadow">
										<div className="card-body">
											<span>{category.category}</span>
											<span>{category.count}</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CategoriesInDb;
