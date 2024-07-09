import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import ScanButton from "../(scan)/ScanButton";
import ReturnButton from "./ReturnButton";

type Props = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  title: string;
  description: string;
};

const MapPage = ({startLat, startLng, endLat, endLng, title, description}: Props) => {

  const initialRegion = {
    latitude: startLat,
    longitude: startLng,
    latitudeDelta: Math.abs(startLat - endLat) * 2.5,
    longitudeDelta: Math.abs(startLng - endLng) * 2.5,
  };


  return (
<View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        showsUserLocation={true}
      >
        <Marker
          coordinate={{ latitude: endLat, longitude: endLng }}
          title={title}
          description={description}
        />
      </MapView>
        <View style={styles.buttonContainer}>

        <ReturnButton />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
})

export default MapPage;
