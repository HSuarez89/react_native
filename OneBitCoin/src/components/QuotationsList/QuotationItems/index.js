import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"

export default function QuotationItems(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image style={styles.logoBitcoin} source={require('../../../img/bitcoin.png')}/>
                    <Text style={styles.dayQuotation}>30/10/2024</Text>
                </View>
            </View>
                <View style={styles.contextRight}>
                    <Text style={styles.price}>$53331.052</Text>
                </View>  
        </View>
    )
}