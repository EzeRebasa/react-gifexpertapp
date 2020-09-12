import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //   const handleAdd = (e) => {
  //     // setCategories([...categories,'HunterXHunter']);
  //     setCategories((cats) => [...cats, "HunterXHunter"]); // ej con callback
  //   };

  return (
    <>
      <h2> GifExpertApp </h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid 
            key={category}
            category= { category }
            />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
