import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

type Props = {
  stores: any[];
  prices: any[];
};

const ProductStores = ({ stores, prices }: Props) => {
  console.log(stores[0].group);
  console.log(prices[0].store.code);

  // <Text>{`Gå #km for ${item.current_price.price}kr hos ${item.store.name}`}</Text>
  return (
    <View>
      <FlatList
        data={stores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>

            {prices.some((obj) => obj.store && obj.store.code === item.group) ? (
                <Text>{item.name}</Text>
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
