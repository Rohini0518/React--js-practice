import React, { useState } from "react";
import "./styles.css"; 
import recipesData from "/recipesData"
const RecipeFilterApp = () => {
  const [ratingR, setRatingR] = useState(4.0);
  const [cartValue, setCartValue] = useState([]);
  const [filterReceipes, setFilterReceipes] = useState(recipesData)
  const [alldata] = useState(recipesData)
 
  function handleFilter(e) {
    setRatingR(e.target.value)
    let filteredData = alldata.filter((item) => item.rating >= e.target.value)
  setFilterReceipes(filteredData)
  }

  function handleAddToCart(card) {
 setCartValue([...cartValue,card])
}

  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
      <div>
          <label htmlFor="rating-filter" style={{ fontWeight: 400 }}>
            Filter By Rating:
          </label>
        <select  id="rating-filter" style={{padding:"4px"}} 
        onChange={(e)=>handleFilter(e)}>
          <option value="4.0">4.0+</option>
          <option value="4.3">4.3+</option>
          <option value="4.5">4.5+</option>
          <option value="4.7">4.7+</option>
          <option value="4.9">4.9+</option>
          </select>
        </div>
        <div style={{ fontWeight: 600 }}>
          <span>🛒</span>
          <span>Cart Items: {cartValue.length}</span>
        </div>
      </div>
      <p style={{ textAlign: "center", fontWeight: 600, }}>Average Rating: {ratingR}({filterReceipes.length} Recipes)</p>
      <div className="card">
        {filterReceipes.map((card) => (<div className="cardsection" key={card.id} >
          <img src={card.image} width="100%" height="70px"  />
          <p>{card.name}</p>
          <p>🍴Cuisine:</p>
          <p>⭐Rating: (26 reviews)</p>
          <button style={{ backgroundColor: "lightgreen", color: "white", border: "none", padding: "8px" }}
          onClick={()=>handleAddToCart(card)}
          >Add to Cart</button>
        </div>))}
       
      </div>
    </div>
  );
};

export default RecipeFilterApp;
