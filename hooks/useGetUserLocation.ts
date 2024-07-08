import { useState, useEffect } from "react";
import * as Location from 'expo-location'

export const useGetUserLocation = () => {
  const [lat, setLat] = useState<any | null>(null);
  const [lng, setLng] = useState<any | null>(null);


  useEffect(() => {
    (async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            console.log('Fikk ikke tilgang til bruker lokasjon')
            return
        }
        const location = await Location.getCurrentPositionAsync({})
        setLat(location.coords.latitude)
        setLng(location.coords.longitude)
    })()
}, [lat, lng])

  return {lat, lng};
};
