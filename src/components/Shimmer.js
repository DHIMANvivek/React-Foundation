
const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(9).fill("").map((e, index) => (<div id="index" key={index} className="shimmer-card"></div>))}
        </div>
    )
}

export default Shimmer; 