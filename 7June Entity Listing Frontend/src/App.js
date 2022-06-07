import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import ProductCard from "./components/ProductCard";
import "./styles.css";
import axios from "axios";
import { Carousel } from "./components/Carousel";
import { Link } from "react-router-dom";

 
export default function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ascending, setAscending] = useState(true);
  const [page, setPage] = useState(1);
  const [limit,setLimit] = useState(4);
  const[ratingOrder, setRatingOrder]=useState(0)


  const fetchProducts = (page = 1, order = "ASC",limit = 4) => {
    return axios.get("http://localhost:8080/products" ,{
        params: {
          _page: page,
          _limit: limit,
          _sort: "price", 
          _order: order,
          _rating: ratingOrder
        },
      }
    );
  };


const getdata = (page,ascending) => {
  setLoading(true);
  const order = ascending ? "ASC":"DESC";
  fetchProducts(page,order)
    .then((res) => {
      setLoading(false);
      setError(false);
      setData([...res.data]);
    })
    .catch((error) => {
      setLoading(false);
      setError(true);
      console.log(error);
    });
}

useEffect(() => {
    getdata(page,ascending)
}, [page,ascending,ratingOrder]);
 
  const handleOrder = () => setAscending(!ascending);

  return (
    <div className="App">
      <Carousel />
      <br />
       <br />

      <div>
        <div id="loading-container">{loading ? "...Loading" : null} </div>
        <div> {error ? "Something went wrong!":null}</div>

          <Button 
             id="SORT_BUTTON"
             title={`Sort by ${!ascending?"Ascending" :"Descending"} Price`}
             onClick={handleOrder}
          />
       <Button onClick={()=>{setRatingOrder(1000)}} title="Rating-Low to High" />
<Button onClick={()=>{setRatingOrder(2000)}} title="Rating-High to Low" />

        <Button title="PREV" id="PREV" disabled={page === 1}  onClick={()=>setPage(page-1)}/>
        <Button id="NEXT" title="NEXT" disabled={data.length < limit} onClick={()=>setPage(page+1)}/>
      </div>

      <div className="wer">
      {data.map((item) => 
        <ProductCard
        key={item.id}
        id={item.id}
        avatar={item.avatar} 
        name={item.name}
        price={item.price}
        rating={item.rating}
        />
        
      )}
     
      </div>
      
    </div>
  );
}