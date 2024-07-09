import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import ProductPage from "../components/(product)/ProductPage";
import { RootStackParamList } from "../utils/types";

type ProductRouteProp = RouteProp<RootStackParamList, "Options">;

const ProductOptionsScreen = () => {
  const route = useRoute<ProductRouteProp>();
  const { product } = route.params;

  return <ProductPage product={product} />;
};

export default ProductOptionsScreen;
