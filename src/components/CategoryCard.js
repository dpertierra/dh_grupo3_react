import React from "react";

function CategoryCard(props) {
	return (
		<React.Fragment>
			<div className="col-lg-6 mb-4">
				<div className="card card-text card-bg shadow">
					<div className="card-body category-card">
						<span>
							{props.category === "room" ? "Habitación" : "Actividad"}
						</span>
						<span>{props.count}</span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
export default CategoryCard;
