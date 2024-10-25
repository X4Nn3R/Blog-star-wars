const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlPeople: "https://www.swapi.tech/api/people",
			urlPlanets: "https://www.swapi.tech/api/planets",
			urlVehicles: "https://www.swapi.tech/api/vehicles",
			peopleList: [],
			planetList: [],
			vehicleList: [],
			favorites: []
		},
		actions: {

			// Use getActions to call a function within a fuction			

			loadCharacters: async () => {
				const { urlPeople } = getStore();
				try {
					const response = await fetch(`${urlPeople}`);
					const data = await response.json();

					// Cargar detalles de cada personaje
					const detailedPeople = await Promise.all(data.results.map(async (person) => {
						const detailResponse = await fetch(`${urlPeople}/${person.uid}`);
						const detailData = await detailResponse.json();
						return detailData.result; // Devuelve las propiedades del personaje
					}));

					setStore({ peopleList: detailedPeople });
				} catch (err) {
					console.error(err);
				}
			},

			loadCharacterPlanets: async () => {
				const { urlPlanets } = getStore();
				try {
					const response = await fetch(`${urlPlanets}`);
					const data = await response.json();

					// Cargar detalles de cada planeta
					const detailedPlanet = await Promise.all(data.results.map(async (planet) => {
						const detailResponse = await fetch(`${urlPlanets}/${planet.uid}`);
						const detailData = await detailResponse.json();
						return detailData.result;
					}));

					setStore({ planetList: detailedPlanet });
				} catch (err) {
					console.error(err);
				}
			},

			loadCharacterVehicle: async () => {
				const { urlVehicles } = getStore();
				try {
					const response = await fetch(`${urlVehicles}`);
					const data = await response.json();

					// Cargar detalles de cada vehiculo
					const detailedVehicle = await Promise.all(data.results.map(async (vehicle) => {
						const detailResponse = await fetch(`${urlVehicles}/${vehicle.uid}`);
						const detailData = await detailResponse.json();
						return detailData.result;
					}));

					setStore({ vehicleList: detailedVehicle });
				} catch (err) {
					console.error(err);
				}
			},


			addFavoriteCharacter: (character) => {
				const store = getStore()
				console.info(character)

				if (!store.favorites.some(item => item.name === character.name && item.type === character.type)) {
					setStore({ favorites: [...store.favorites, character] })
				}
			},

			deleteFavoriteCharacter: (characterID) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(item => item.name !== characterID) });
			}

		}

	};

};


export default getState;
