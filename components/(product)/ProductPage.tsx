import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useGetProductInformation } from "../../hooks/useGetProductInformation";
import { Product } from "../../utils/types";
import ToScanButton from "../(navigation)/ToScanButton";
import { useGetNearbyStores } from "../../hooks/useGetNearbyStores";
import { useGetUserLocation } from "../../hooks/useGetUserLocation";

type Props = {
  product: string;
};

const ProductPage = ({ product }: Props) => {
  console.log(product);
  const {lat, lng } = useGetUserLocation()
  // const [stores, setStores] = useState<any[] | null>(null)
  const stores = useGetNearbyStores(lat, lng, 10)
  //if (lat && lng) {
  //
  //  console.log(`lat: ${lat}, lng: ${lng}`)
  //  setStores(storesT)
  // }

  const nearbyStores = stores?.data || null;

  const productInfo: Product[] | null = useGetProductInformation(product)
  
  if (productInfo) {
    
    console.log(`Gå #km for ${productInfo[0].current_price.price}kr hos ${productInfo[0].store.code} `)
  } 
  
  if (!productInfo || !nearbyStores ) {
        return (
          <View style={styles.container}>
            <Text>Loading...</Text>
            <ToScanButton />
          </View>
    );
  }
  console.log(nearbyStores)
  return (
<View style={styles.container}>
      <FlatList
        data={productInfo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.item}>
            {item.current_price && item.store ? (
              <Text>{`Gå #km for ${item.current_price.price}kr hos ${item.store.name}`}</Text>
            ) : (
              <Text>Mangler informasjon</Text>
            )}
          </View>
        )}
      />
      <ToScanButton />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 18,
        marginTop: 200,
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
})

export default ProductPage;
