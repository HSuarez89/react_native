import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#665E4E',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    contextLeft: {
        width: '36%',
        height: '100%',
        alignItems: 'flex-start'
    },
    dayQuotation: {
        fontSize: 16,
        paddingLeft: 8,
        color: '#FFB829'
    },
    contextRight: {
        width: '60%',
        alignItems: 'flex-end'
    },
    logoBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2,
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 18,
        color: '#FFB829',
        fontWeight: 'bold'
    }
})

export default styles