import { useState, useEffect } from "react";
import { Restaurants } from "../config";

const useRestaurantData = () => {
     const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, [])

    const getRestaurants = async () => {
        try {
            const data = await fetch(Restaurants);

            const json = await data.json();

            function checkJsonData(jsonData) {

                const cards = jsonData?.data?.cards || [];

                const restaurants = cards
                    .map(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                    .find(checkData => checkData !== undefined);

                console.log(restaurants);

                return restaurants;
            }
            const resData = await checkJsonData(json);
            setRestaurantList(resData);
        } catch (error) {
            console.log(error);
        }

    }
    return restaurantList;

}

export default useRestaurantData;