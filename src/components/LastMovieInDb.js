import React from "react";

function LastMovieInDb(props) {
	return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h5 className="m-0 font-weight-bold title">{props.title}</h5>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img
							className="img-fluid px-3 px-sm-4 mt-3 mb-4"
							style={{ width: "40rem" }}
							src={require(`../assets/images/${props.image}`)}
							alt={props.alt}
						/>
					</div>
					<p>{props.description}</p>
					<a className="btn btn-accent" target="_blank" rel="nofollow" href="#">
						View movie detail
					</a>
				</div>
			</div>
		</div>
	);
}
export default LastMovieInDb;
