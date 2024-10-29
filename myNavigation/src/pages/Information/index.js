import React from "react";
import { View, Text } from "react-native";

export default function Information({navigation}){
    return (
        <View>
            <Text>Information</Text>
            <Text>Meu amor!</Text>
            <Text onPress={() => navigation.navigate('Contacts')}>Contacts...</Text>
        </View>
    )
}