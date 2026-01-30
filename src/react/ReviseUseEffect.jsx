// import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../css/styleCard.css";

export default function ReviseUseEffect() {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapiserver.reactbd.org/api/products?page=1&perPage=10",
        );
        const datajson = await response.json();
        setIsLoading(false)
        setData(datajson.data);
        console.log(datajson);
      } catch (error) {
        console.error("Error:", error);
      }
     };
      console.log("fetch data useeffect")
          fetchData();
    }, []);

  useEffect(()=>{
    console.log("use effect empty ",isLoading)
  },[])
  useEffect(()=>{
    console.log("use effect data-usestate fetch ")
        console.log(isLoading)

  },[data])

  return (
    <>
      <div className="fashion-wrapper">
      <div className="fashion-header">
        <h2 className="title">Fashion Wear</h2>
        <h4 className="subtitle">sectionSubtitle</h4>
        <p className="emoji">(❁´◡`❁)</p>
      </div>
    {isLoading ?<div>Loading----</div>:
      <div className="product-grid">
        {data.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-img"
            />
            <p className="product-title">{product.title}</p>
            <p className="product-price">Price:$ {product.price}</p>
            <p >Ratings:{product.rating}</p>

          </div>
        ))}
      </div>}

    </div>
    </>
  );
}
