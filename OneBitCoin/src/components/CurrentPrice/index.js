import React from "react";
import { View, Text } from 'react-native'
import styles from './styles'

export default function CurrentPrice({current}){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>{current ? `$ ${current}` : "Loading..."}</Text>
            <Text style={styles.textPrice}>Ultima Cotação</Text>
        </View>
    )
}