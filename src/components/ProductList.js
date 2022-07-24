import React, { Component } from "react";
import Product from "./Product";

export class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}
	componentDidMount() {
		fetch("http://localhost:3001/api/products")
			.then((response) => response.json())
			.then((data) => this.setState({ products: data.products }))
			.catch((error) => console.log(error));
	}
	render() {
		return (
			<React.Fragment>
				{/*<!-- PRODUCTS LIST -->*/}
				<h1 className="h3 mb-2 text-gray-800">
					All the products in the Database
				</h1>

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
										<th>Descripcion</th>
										<th>Precio</th>
									</tr>
								</thead>
								<tfoot>
									<tr>
										<th>Id</th>
										<th>Nombre</th>
										<th>Categoria</th>
										<th>Descripcion</th>
										<th>Precio</th>
									</tr>
								</tfoot>
								<tbody>
									{this.state.products.map((product, index) => {
										console.log(product);
										return <Product key={index} {...product} />;
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default ProductList;
