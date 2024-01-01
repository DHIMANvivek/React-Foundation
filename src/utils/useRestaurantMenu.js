import { useState, useEffect } from "react";
import { RestaurantId } from "../config";

const useRestaurant = (id) => {

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        const data = await fetch(RestaurantId + id);

        const json = await data.json();

        async function checkJsonData(jsonData) {

            const cards = jsonData?.data?.cards || [];

            const restaurants = cards
                .map(card => card?.card?.card?.info)
                .find(checkData => checkData !== undefined);

            const extractMenuName = (card) => card?.card?.info?.name;

            const menuItems = json?.data?.cards
                ?.flatMap((card) =>
                    (card.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [])
                        .flatMap((innerCard) => innerCard?.card?.card?.itemCards ?? [])
                        .map(extractMenuName)
                        .filter((name) => name !== undefined)
                ) ?? [];

            // getRestaurantMenu(menuItems);
            return { restaurants, menuItems };
        }
        const resData = await checkJsonData(json);
        console.log(resData);
        setRestaurant(resData);
    }
    return { restaurant };
}

export default useRestaurant;