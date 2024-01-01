import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item))
    }

    try {
        const { id } = useParams();

        const { restaurant } = useRestaurant(id);

        return (!restaurant?.restaurants) ? (<Shimmer />) : (
            <div className="cardMenu">
                <div className="content">
                    <img src={IMG_CDN + restaurant?.restaurants?.cloudinaryImageId} alt="Restaurant Image" />
                    <div className="details">
                        <h2>{restaurant?.restaurants?.name}</h2>
                        <h3>{restaurant?.restaurants?.totalRatingsString}</h3>
                    </div>
                </div>
                <div className="menu">
                    <h2 className="content">Menu</h2>
                    <ul>
                        {
                            restaurant?.menuItems?.map((item, index) => {
                                return <li key={index}>{item} <button className="bg-green-50" onClick={() => { addFoodItem(item) }}>+ Add</button></li>
                            })
                        }
                    </ul>
                </div>
            </div>


        )


    } catch (error) {
        console.log(error);
    }
}

export default RestaurantMenu;