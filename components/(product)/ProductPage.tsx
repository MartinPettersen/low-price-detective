import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useGetProductInformation } from "../../hooks/useGetProductInformation";
import { Product } from "../../utils/types";
import ToScanButton from "../(navigation)/ToScanButton";
import { useGetNearbyStores } from "../../hooks/useGetNearbyStores";
import { useGetUserLocation } from "../../hooks/useGetUserLocation";
import ProductStores from "./ProductStores";

type Props = {
  product: string;
};

const ProductPage = ({ product }: Props) => {
  const { lat, lng } = useGetUserLocation();

  const stores = useGetNearbyStores(lat, lng, 1.5);
  const productInfo: Product[] | null = useGetProductInformation(product);



  return (
    <View style={styles.container}>
      {(!productInfo || !stores || !lat || !lng) ? 
        <Text>Loading...</Text>
        :
        <>
        <ToScanButton />
        <ProductStores prices={productInfo} stores={stores} lat={lat} lng={lng} />
        </>        
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 18,
    marginTop: 0,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
});

export default ProductPage;
