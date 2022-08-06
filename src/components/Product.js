import React from "react";

export function Product(props) {
	function deleteProduct() {
		fetch("http://localhost:3001/api/products/delete/" + props.id, {
			method: "POST",
		})
			.then(props.updateTable())
			.catch((error) => console.log(error));
	}
	return (
		<React.Fragment>
			<tr>
				<td>{props.id}</td>
				<td>{props.name}</td>
				<td>{props.category === "room" ? "Habitación" : "Actividad"}</td>
				<td>{props.description}</td>
				<td>${props.price}</td>
				<td>
					<div className="actions">
						<button className="action-button">
							<i className="fa-solid fa-pen-to-square"></i>
						</button>
						<button
							className="action-button trash-icon"
							onClick={() => deleteProduct()}
						>
							<i className="fa-solid fa-trash-can trash-icon"></i>
						</button>
					</div>
				</td>
			</tr>
		</React.Fragment>
	);
}

export default Product;
