import React from "react";
import PropTypes from "prop-types";
function Card(props) {
	return (
		<div className="col-md-4 mb-4" key={props.title + props.index}>
			<div className="card shadow card-border-left h-100 py-2">
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className="text-xs font-weight-bold text-uppercase mb-1 card-title">
								{props.title}
							</div>
							<div className="h5 mb-0 font-weight-bold card-text-dark">
								{props.amount}
							</div>
						</div>
						<div className="col-auto">
							<i className={`fas ${props.icon} fa-2x icon-color`}></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.defaultProps = {
	icon: "fa-clipboard-list",
	amount: 0,
	title: "No title",
};

Card.propTypes = {
	icon: PropTypes.string,
	amount: PropTypes.number,
	title: PropTypes.string,
};

export default Card;
