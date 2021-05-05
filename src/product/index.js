import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://2d51ee40-739b-40a4-8408-61ede7afc58c.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(product);
  console.log("테스트");

  return <h1>상품상세페이지 {id}</h1>;
}

export default ProductPage;
