import { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

import * as Location from "expo-location"

export default function Maps() {

    const [location, setLocation] = useState(null);
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        getLocationAsync();
    }, []);

    const getLocationAsync = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);
        } else {
            console.log('Permission de localisation refusée')
        }
    }

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Rayon de la Terre en kilomètres
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        setDistance(distance)
        return distance;
    }

    const toRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    }

    return (

        <View style={{ flex: 1 }}>
          
            {location && (
                <MapView style={{ flex: 1 }}
                    initialRegion={
                        {
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            latitudeDelta: 0.0421
                        }
                    }
                >

                    <Marker coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                        title='Votre position' />

                    <Marker coordinate={{
                        latitude: 49.27894800,
                        longitude: 2.46468800,
                    }}
                        title='Position 2' />

                </MapView>
            )}
        </View>
    )
}
