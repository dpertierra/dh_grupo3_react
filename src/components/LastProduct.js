import React, { useState, useEffect } from "react";

function LastProduct() {
	const [product, setProduct] = useState({});
	useEffect(() => {
		fetch("http://localhost:3001/api/products/last")
			.then((response) => response.json())
			.then((data) => {
				setProduct(data.product);
			});
	}, []);
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold title">{product.name}</h5>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img
							className="img-fluid px-3 px-sm-4 mt-3 mb-4"
							style={{ width: "40rem" }}
							src={product.image}
							alt={product.name}
						/>
					</div>
					<p>{product.description}</p>
					<a
						className="btn btn-accent"
						target="_blank"
						rel="nofollow noreferrer"
						href={product.detail}
					>
						Ver detalle del producto
					</a>
				</div>
			</div>
		</div>
	);
}
export default LastProduct;
