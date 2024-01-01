
import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
export const RestaurantCard = (props) => {
    return !props ? (
        <Shimmer />
    ) : (
        <div className="card">
            <img alt="source code" src={IMG_CDN + props?.cloudinaryImageId} />
            <div className="content">
                <h1>{props?.user?.name}</h1>
                <h4>{props?.name}</h4>
                <h2>{props?.cuisines.join(",")}</h2>
                <p>Rating: {4}</p>
            </div>
        </div>
    );
}