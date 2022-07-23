import React from "react";
import PropTypes from "prop-types";
function Card(props) {
	return (
		<div className="col-md-4 mb-4" key={props.title + props.index}>
			<div className={`card shadow ${props.borderColor} h-100 py-2`}>
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
								{props.title}
							</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">
								{props.amount}
							</div>
						</div>
						<div className="col-auto">
							<i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.defaultProps = {
	borderColor: "border-left-success",
	icon: "fa-clipboard-list",
	amount: 0,
	title: "No title",
};

Card.propTypes = {
	borderColor: PropTypes.string,
	icon: PropTypes.string,
	amount: PropTypes.number,
	title: PropTypes.string,
};

export default Card;
