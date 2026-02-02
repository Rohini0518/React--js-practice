// import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../css/styleCard.css";

export default function ReviseUseEffect() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(8);
  const [age, setAge] = useState(24);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapiserver.reactbd.org/api/products?page=1&perPage=10",
        );
        const datajson = await response.json();
        setIsLoading(false);
        setData(datajson.data);
        console.log(datajson);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    console.log("fetch data useeffect");
    fetchData();
  }, []);

  // useEffect(()=>{
  //   console.log("use effect empty ",isLoading)
  // },[])

  // useEffect(()=>{
  //   console.log("use effect data-usestate fetch ")
  //       console.log(isLoading)
  // },[data])

  // useEffect(() => {
  //   console.log("age in useeffect ");
  //   // setCount((p)=>p+0.5)
  //   //causes infinite loopp
  // }, [age]);

  // useEffect(() => {
  //   console.log("count in dependency ,age +1");
  //   setAge((p) => p + 1);
  // }, [count]);


  useEffect(()=>{
const timer=setTimeout(()=>{
  console.log("settimeout in useeffect c+4,4 sec",count)
  setCount(count+4)
},4000)
 return ()=>clearTimeout(timer)
  },[])

  useEffect(()=>{
const timer=setTimeout(()=>{
  console.log("settimeout in useeffect 2nd time c+2,2 sec",count)
  setCount(count+2)
},2000)
 return ()=>{
  console.log("cleartimeout")
 return clearTimeout(timer)}
  },[age])

//   useEffect(()=>{
// const timer=setInterval(()=>{
//   console.log("setInterval in useeffect",age)
//   setAge((p)=>p+2)
// },4000)
//  return ()=>{
//     console.log("clearInterval in useeeffct")
//     return clearInterval(timer)}
//   },[])


  return (
    <>
      <div className="fashion-wrapper">
        <div className="fashion-header">
          <h2 className="title">Fashion Wear</h2>
          <h4 className="subtitle">sectionSubtitle</h4>
          <p className="emoji">(❁´◡`❁)</p>
        </div>
        <div>
          <p>count:{count} </p>
          <button onClick={() => setCount(count + 1)}>chnageCount</button>
        </div>
        <div>
          <p>age:{age} </p>
          <button onClick={() => setAge(age - 2)}>chnageAge</button>
        </div>
        {isLoading ? (
          <div>Loading----</div>
        ) : (
          <div className="product-grid">
            {data.map((product) => (
              <div className="product-card" key={product.title}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
                <p className="product-title">{product.title}</p>
                <p className="product-price">Price:$ {product.price}</p>
                <p>Ratings:{product.rating}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
