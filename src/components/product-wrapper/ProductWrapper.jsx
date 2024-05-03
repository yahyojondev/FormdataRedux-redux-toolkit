import React from "react";
import { useGetCategoryQuery } from "../../context/categoryApi";
// import Button from "@mui/material/Button";

const ProductWrapper = () => {
  const { data } = useGetCategoryQuery({ limit: 10, count: 2 });
  console.log(data);

  let productitem = data?.data.map((el) => (
    <div key={el.id}>
      <h2>{el.title}</h2>
      <p>{el.price}</p>
      <button>delete</button>
    </div>
  ));
  return (
    <div>
      <h2>ProductWrapper</h2>
      {productitem}
    </div>
  );
};

export default ProductWrapper;
