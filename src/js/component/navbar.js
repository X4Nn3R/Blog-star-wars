import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imagen from "../../img/star-wars.png"
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light sticky-top" >
			<div className="container d-flex p-0">

				<div className="ml-auto">

					<Link to="/">
						<img className="mx-3 p-0 " src={imagen} alt="..." style={{ width: "60px", height: "70px" }} />

					</Link>
				</div>
				<div className="ml-auto mx-0 p-0 d-flex">

					<Link to="/favorites" className="btn btn-warning mx-2">Favorites</Link>

					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu">
							{store.favorites.length === 0 ? (
								<li>
									<span className="mx-3">(empty)</span>
								</li>
							) : (
								store.favorites.map((item, index) => (
									<li key={index} className="d-flex justify-content-between mx-2">
										<a >
											{item.name}
										</a>
										<i className="btn fa-solid fa-trash p-0"
											onClick={() => {
												actions.deleteFavoriteCharacter(item.name, item.type);
											}}

										>

										</i>

									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
