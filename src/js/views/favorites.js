import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { CardPeople } from "../component/cardPeople";
import { CardPlanets } from "../component/cardPlanets";
import { CardVehicle } from "../component/cardVehicles";

export const Favorites = () => {

    const { store } = useContext(Context);

    return (
        <>
            <div className=" container py-3">
                <h1 className=" container " style={{ color: "#ef4545" }}>Favorites</h1>
                <div
                    style={{
                        display: "flex",
                        overflowX: "auto",
                        padding: "10px",
                        gap: "10px",
                    }}
                >
                </div>
                <div className=" container overflow-auto d-flex flex-noweap mx-0 px-0" style={{ overflow: "scroll" }}>
                    {store.favorites.map((item) => {
                        if (item.type === "characters") {
                            return (
                                <CardPeople
                                    key={`people-${item.name}`}
                                    people={item}

                                />
                            )
                        }
                        if (item.type === "planets") {
                            return (
                                <CardPlanets
                                    key={`planet-${item.name}`}
                                    planets={item}

                                />
                            )
                        }
                        if (item.type === "vehicles") {
                            return (
                                <CardVehicle
                                    key={`vehicle-${item.name}`}
                                    vehicle={item}

                                />
                            )
                        }
                    }
                    )}


                </div>
            </div>

        </>


    )
}
