import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [listOfResturants, setListOfResturant] = useState(resList);

  return (
    <div className="body">
      <div className="filter ">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfResturants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Resturants{" "}
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
