import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ListUser() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ padding: 50 }}>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>

                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>

                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>


                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>
                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>


                    <View style={styles.user}>
                        <Image
                            style={styles.image}
                            resizeMode="cover"
                            source={{ uri: 'https://randomuser.me/api/portraits/med/men/43.jpg' }}
                        />
                        <Text style={styles.name}>test 2</Text>
                    </View>

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
        marginBottom: 6,
        width: 50,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});

