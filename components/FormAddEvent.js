import React, { useState } from 'react'
import { ScrollView, TextInput, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown'
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@rneui/themed';

export default function FormAddEvent() {

    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;

        setDate(currentDate);
    };


    // a supprimer
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]

    return (
        <SafeAreaView style={{ marginTop: 100, alignSelf: 'center' }}>

            <View style={{ marginBottom: 50, alignSelf: 'flex-start', alignSelf: 'center' }}>

                <SelectDropdown
                    defaultButtonText='Utilisateur'
                    buttonStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: 15, width: '80%' }}
                    renderDropdownIcon={isOpened => {
                        return <Ionicons name="chevron-down-outline" color={'black'} size={25} />
                    }}
                    dropdownIconPosition={'right'}

                    data={countries}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                />

            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '80%' }}>

                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />

                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'time'}
                    is24Hour={true}
                    onChange={onChange}
                />
            </View>

            <View>
                <Button style={{ marginTop: 50 }} title={'ajouter'} />
            </View>

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    inputDesc: {
        flex: 1,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },

})
