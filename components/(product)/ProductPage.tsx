import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useGetProductInformation } from "../../hooks/useGetProductInformation";
import { Product } from "../../utils/types";
import ToScanButton from "../(navigation)/ToScanButton";
import { useGetNearbyStores } from "../../hooks/useGetNearbyStores";
import { useGetUserLocation } from "../../hooks/useGetUserLocation";
import ProductStores from "./ProductStores";
import Slider from "@react-native-community/slider";

type Props = {
  product: string;
};

const ProductPage = ({ product }: Props) => {
  const { lat, lng } = useGetUserLocation();

  const [km, setKm] = useState<number>(0.5);

  const stores = useGetNearbyStores(lat, lng, km);
  const productInfo: Product[] | null = useGetProductInformation(product);

  if (!productInfo || !stores || !lat || !lng) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.text}>Loading...</Text>
        <ToScanButton />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!productInfo || !stores || !lat || !lng ? (
        <Text style={styles.text}>Loading...</Text>
      ) : (
        <>
          <Slider
            style={styles.slider}
            minimumValue={0.1}
            maximumValue={20}
            step={0.1}
            value={km}
            onValueChange={(value) => setKm(Math.round(value * 100) / 100)}
            minimumTrackTintColor="#68C174"
            maximumTrackTintColor="#343A40"
            thumbTintColor="#68C174"
          />
          <Text>{km}</Text>
          <ProductStores
            prices={productInfo}
            stores={stores}
            lat={lat}
            lng={lng}
          />
          <ToScanButton />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 18,
    marginTop: 200,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  text: {
    color: "black",
  },
  slider: {
    width: "80%",
    height: 40,
  },
});

export default ProductPage;
