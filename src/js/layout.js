import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import DetailCard from "./views/detailCard";
import DetailPlanet from "./views/detailPlanet";
import DetailVehicle from "./views/detailVehicle";
import { Favorites } from "./views/favorites";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/detail-people/:people_id" element={<DetailCard />} />
						<Route path="/detail-planet/:planet_id" element={<DetailPlanet />} />
						<Route path="/detail-vehicle/:vehicle_id" element={<DetailVehicle />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
