import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductList() {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [pageTotal, setPageTotal] = useState(1);

	function getProducts() {
		fetch("http://localhost:3001/api/products/" + page)
			.then((response) => response.json())
			.then((data) => {
				data.products && setProducts(data.products);
				data.pageTotal && setPageTotal(data.pageTotal);
			})
			.catch((error) => console.log(error));
	}

	function updateTable() {
		getProducts();
	}
	useEffect(() => {
		updateTable();
	}, [page]);

	return (
		<div className="container-fluid">
			{/*<!-- PRODUCTS LIST -->*/}
			<div className="container-title">
				<h1 className="h3 mb-2 title">Todos los Productos</h1>
				<button className="btn btn-accent btn-new">
					Crear Producto
					<i className="fa-solid fa-plus"></i>
				</button>
			</div>
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
									<th>Categoría</th>
									<th>Descripción</th>
									<th>Precio</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Id</th>
									<th>Nombre</th>
									<th>Categoría</th>
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
						<div className="pager">
							<button
								className="btn btn-accent"
								onClick={() => (page > 1 ? setPage(page - 1) : null)}
								disabled={page > 1 ? false : true}
							>
								<i className="fa-solid fa-arrow-left"></i>
								Previa
							</button>
							<button
								className="btn btn-accent"
								onClick={() => {
									page < pageTotal && setPage(page + 1);
								}}
								disabled={page < pageTotal ? false : true}
							>
								<span>Siguiente</span>
								<i className="fa-solid fa-arrow-right"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductList;
