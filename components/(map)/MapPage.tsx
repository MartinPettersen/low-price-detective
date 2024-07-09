import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

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
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default MapPage;
