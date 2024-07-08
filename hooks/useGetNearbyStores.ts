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
        const data = await res.json();

        console.log(data)
        setStores(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (lat && lng && km) {
      fetchStores();
    }
  }, [km]);

  return stores;
};
