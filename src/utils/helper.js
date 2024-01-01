import debounce from "./debounce";
export function filterData(searchText, restaurantList) {
    return restaurantList.filter((item) => {
        if (item.info.name.toLowerCase().includes(searchText)) {
            console.log(item);
            return item;
        }
    })
}

export const FilterData = debounce(filterData, 1000);