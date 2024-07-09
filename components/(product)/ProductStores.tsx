import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useGetPriceAtStore } from "../../hooks/useGetPriceAtStore";
import useGetTravelDistance from "../../hooks/useGetTravelDistance";
import { RootStackParamList } from "../../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Props = {
  stores: any[];
  prices: any[];
  lat: any;
  lng: any;
};

const ProductStores = ({ stores, prices, lat, lng }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View>
      <FlatList
        data={stores}
        keyExtractor={(item) => `${item.id}-${item.name}`}
        renderItem={({ item }) => (
          <View>
            {prices.some(
              (obj) => obj.store && obj.store.code === item.group
            ) ? (
              <TouchableOpacity
                style={styles.item}
                onPress={() =>
                  navigation.navigate("Map", {
                    startLat: lat,
                    startLng: lng,
                    endLat: item.position.lat,
                    endLng: item.position.lng,
                    title: item.name,
                    description: `${useGetPriceAtStore(item.group, prices)}kr`,
                  })
                }
              >
                <Text>{`${useGetPriceAtStore(item.group, prices)}kr hos ${item.name} avstand: ${useGetTravelDistance(lat, lng, item.position.lat, item.position.lng)} `}</Text>
              </TouchableOpacity>
            ) : null}
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
