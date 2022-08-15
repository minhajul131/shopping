import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://intense-fortress-38130.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
      },[])

      return [products, setProducts];
}

export default useProducts;