import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString} </h4>
    </div>
  );
};

//Higher Order Component

//Input - ResturantCard => ResturantCardVeg

export const withVegLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-300 text-black m-2 p-2 rounded-lg">
          Veg
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
