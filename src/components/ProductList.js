import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductList() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data.products))
			.catch((error) => console.log(error));
	});
	function updateTable() {
		fetch("http://localhost:3001/api/products")
			.then((response) => response.json())
			.then((data) => setProducts(data.products))
			.catch((error) => console.log(error));
	}

	return (
		<div className="container-fluid">
			{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 title">Todos los Productos</h1>

			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table
							className="table table-bordered"
							id="dataTable"
							width="100%"
							cellspacing="0"
						>
							<thead>
								<tr>
									<th>Id</th>
									<th>Nombre</th>
									<th>Categoria</th>
									<th>Descripción</th>
									<th>Precio</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Id</th>
									<th>Nombre</th>
									<th>Categoria</th>
									<th>Descripción</th>
									<th>Precio</th>
									<th>Acciones</th>
								</tr>
							</tfoot>
							<tbody>
								{products.map((product, index) => {
									return (
										<Product
											key={index}
											{...product}
											updateTable={updateTable}
										/>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductList;
