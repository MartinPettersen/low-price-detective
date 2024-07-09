import React from "react";
import MapPage from "../components/(map)/MapPage";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../utils/types";

type MapRouteProp = RouteProp<RootStackParamList, "Map">;

const MapScreen = () => {
  const route = useRoute<MapRouteProp>();
  const { startLat, startLng, endLat, endLng, title, description } =
    route.params;

  return (
    <MapPage
      startLat={Number(startLat)}
      startLng={Number(startLng)}
      endLat={Number(endLat)}
      endLng={Number(endLng)}
      title={title}
      description={description}
    />
  );
};

export default MapScreen;
