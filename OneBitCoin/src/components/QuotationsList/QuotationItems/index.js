import React, { useEffect, useState } from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"


export default function QuotationItems({current}){


    function getCurrentDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
        const year = today.getFullYear();
        return `${day}/${month}/${year}`;
    }

    const currentDate = getCurrentDate()

    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logoBitcoin} source={require('../../../img/bitcoin.png')}/>
                    <Text style={styles.dayQuotation}>{currentDate}</Text>
                </View>
            </View>
                <View style={styles.contextRight}>
                    <Text style={styles.price}>{current ? `$${current}` : "Loading..."}</Text>
                </View>  
        </View>
    )
}