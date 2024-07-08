import { useState, useEffect } from "react";

export const useGetNearbyStores = (lat: number, lng: number, km: number) => {
  const [stores, setStores] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const url = `https://kassal.app/api/v1/physical-stores?lat=${lat}&lng=${lng}&km=${km}`;
        const options = {
          headers: {
            "Authorization": `Bearer ${process.env.EXPO_PUBLIC_KASSAL_KEY}`,
          },
        };

        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setStores(data);
      } catch (error) {
        console.log("Error fetching nearby stores:", error);
        setStores(null);
      }
    };

    if (lat && lng && km) {
      fetchStores();
    }
  }, [lat, lng, km]);

  return stores;
};
