import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import ProductPage from "../components/(product)/ProductPage";

type RootStackParamList = {
  Product: { product: any };
};

type ProductRouteProp = RouteProp<RootStackParamList, "Product">;

const ProductOptionsScreen = () => {


    const route = useRoute<ProductRouteProp>();
    const { product } = route.params;

  return (
    <ProductPage product={product} />
  );
};

export default ProductOptionsScreen;
