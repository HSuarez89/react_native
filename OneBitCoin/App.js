import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native'
import CurrentPrice from './src/components/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic'
import QuotationList from './src/components/QuotationsList'
import QuotationItems from './src/components/QuotationsList/QuotationItems'



export default function App() {

  const [current, setCurrent] = useState(null);

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
            .then(response => response.json())
            .then(data => {
                const currentPrice = data.bpi.USD.rate;
                setCurrent(currentPrice);
            })
            .catch(error => {
                console.error("Error fetching current Bitcoin price:", error);
            });
    }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#33302B'/>
      <CurrentPrice current={current}/>
      <HistoryGraphic/>
      <QuotationList/>
      <QuotationItems current={current}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33302B',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
