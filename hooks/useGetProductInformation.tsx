import { useState, useEffect } from "react";
import { Product } from "../utils/types";

export const useGetProductInformation = (ean: string) => {
  const [productInformation, setProductInformation] = useState<Product[] | null>(null);


  useEffect(() => {
    const fetchProductInformation = async () => {
      try {
        const url = `https://kassal.app/api/v1/products/ean/${ean}`;
        const options = {
          headers: {
            "Authorization": `Bearer ${process.env.EXPO_PUBLIC_KASSAL_KEY}`,
          },
        };

        const res = await fetch(url, options);
        const data = await res.json();


        setProductInformation(data.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    if (ean) {
      fetchProductInformation();
    }
  }, [ean]);

  return productInformation;
};
