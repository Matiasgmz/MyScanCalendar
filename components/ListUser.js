import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ListUser({ route }) {
console.log(route)
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://10.74.0.59:3000/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []); // Empty dependency array ensures the effect runs only once after initial render.

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: 20 }}>
                    {users.map((user, index) => (
                        <View key={index} style={styles.user}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: user.image }}
                            />
                            <Text style={styles.name}>{user.first + " " + user.last}</Text>
                        </View>
                    ))}
                    {route.params && (
                        <View style={styles.user}>
                            <Image
                                style={styles.image}
                                resizeMode="cover"
                                source={{ uri: route.params.user.image }}
                            />
                            <Text style={styles.name}>{route.params.user.first} {route.params.user.last}</Text>
                        </View>
                    )}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 20,
        width: '100%',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 100
    },
    name: {
        fontSize: 16,
        marginTop: 5,
        flexDirection: 'row'
    },
});