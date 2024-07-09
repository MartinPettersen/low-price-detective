import { useState, useEffect } from "react";

export const useGetNearbyStores = (lat: number, lng: number, km: number) => {
  const [stores, setStores] = useState<any | null>(null);

  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const fetchStores = async () => {
      try {


        let allStores = [];
        let currentPage = 1;
        let lastPage = 1;

        const url = `https://kassal.app/api/v1/physical-stores?lat=${lat}&lng=${lng}&km=${km}&page=${currentPage}`;
        const options = {
          headers: {
            "Authorization": `Bearer ${process.env.EXPO_PUBLIC_KASSAL_KEY}`,
          },
        };

        const initialRes = await fetch(url, options);
        const initialData = await initialRes.json();

        allStores = initialData.data;
        lastPage = initialData.meta.last_page; 

        for (currentPage = 2; currentPage <= lastPage; currentPage++) {
          const urlLocal = `https://kassal.app/api/v1/physical-stores?lat=${lat}&lng=${lng}&km=${km}&page=${currentPage}`;
          const res = await fetch(urlLocal, options);
          const data = await res.json();
          allStores = [...allStores, ...data.data];
        }

        setStores(allStores);
      } catch (error) {
        console.log("Error fetching nearby stores:", error);
        setStores(null);
      }
    };

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      if (lat && lng && km) {
        fetchStores();
      }
    }, 500);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

  }, [lat, lng, km]);

  return stores;
};
