
const useGetTravelDistance = (startLat: number, startLng: number, endLat: number, endLng: number) => {
    const earthRadius = 6371;
    const toRadians = (degree: number) => degree * (Math.PI / 180);

    const degreeLat = toRadians(endLat - startLat);
    const degreeLng = toRadians(endLng - startLng);

    const angularDistance = Math.sin(degreeLat / 2) * Math.sin(degreeLat / 2) +
        Math.cos(toRadians(startLat)) * Math.cos(toRadians(endLat)) *
        Math.sin(degreeLng / 2) * Math.sin(degreeLng / 2);

    const chordLengthSquared = 2 * Math.atan2(Math.sqrt(angularDistance), Math.sqrt(1 - angularDistance));

    const distance = Math.round((earthRadius * chordLengthSquared) * 100) / 100;

    if ((distance) < 1) {
        return `${distance * 1000} meter`
    } else {
        return `${distance} km`
    }

}

export default useGetTravelDistance