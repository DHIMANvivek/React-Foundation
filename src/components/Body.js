import { RestaurantCard } from '../components/RestaurantCard'
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
// import { filterData } from '../utils/helper';
import { filterData } from '../utils/helper';
import useRestaurantData from '../utils/useRestaurantData';
import useOnline from '../utils/useOnline';
import debounce from '../utils/debounce';

const BodyComponent = ({ user }) => {
    const [searchText, setSearchText] = useState(''); // to create local state variables
    var restaurantList = useRestaurantData();

    const debouncedSearch = filterData(searchText.toLowerCase(), restaurantList).map((item) => {
        return <Link to={"/restaurant/" + item?.info?.id} key={item?.info.id}>
            <RestaurantCard {...item.info} />
        </Link>
    })

    const offline = useOnline();

    if (!offline) {
        return <h1>You Are Offline My Dear Friend</h1>;
    } else {
        return (restaurantList?.length === 0) ? (<Shimmer />) : (
            <>
                <div className='beautiful-search-container'>
                    <input type='text' placeholder='Search for restaurants by name' value={searchText} className='beautiful-search-bar'
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                </div>

                <div className="bodyCss">
                    {
                        (searchText === '') ?
                            restaurantList.map((item) => {
                                return <Link to={"/restaurant/" + item?.info?.id} key={item?.info.id}><RestaurantCard {...item.info} user={user} /></Link>
                            }) :
                            debouncedSearch
                    }
                </div>
            </>
        )
    }
    // conditional rendering
}

export default BodyComponent;