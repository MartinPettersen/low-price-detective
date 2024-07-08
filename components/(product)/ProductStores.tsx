import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useGetPriceAtStore } from "../../hooks/useGetPriceAtStore";
import useGetTravelDistance from "../../hooks/useGetTravelDistance";

type Props = {
  stores: any[];
  prices: any[];
  lat: any;
  lng: any;
};

const ProductStores = ({ stores, prices, lat, lng }: Props) => {
  //console.log(stores[0].position.lat);
  console.log(prices[0]);

  return (
    <View>
      <FlatList
        data={stores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>

            {prices.some((obj) => obj.store && obj.store.code === item.group) ? (
                <Text>{`${useGetPriceAtStore(item.group, prices)}kr hos ${item.name} avstand: ${useGetTravelDistance(lat, lng, item.position.lat, item.position.lng)} `}</Text>
            ) : (
              <Text>Mangler informasjon</Text>
            )}
          </View>
        )}
      />
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
});

export default ProductStores;
