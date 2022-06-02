import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Products = () => {
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(false);
      });
  }, []);
  console.log(data);

  return (
    <div style={{ color: "white" }}>
      {loading && <div>...Loading</div>}
      {/* {error && <div>...something went wrong!</div>} */}

      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        {data.map((e, i) => (
          <div key={e.id} style={{padding: "20%"}}>
            <div>{e.title}</div>
            <div>${e.price}</div>
            <img
              style={{ width: "65%", height: "100px" }}
              src={e.thumbnail}
              alt=""
            ></img>

            <div>
              <Link style={{ color: "skyblue" }} to={`/products/${e.id}`}>
                See more details
              </Link>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
};
