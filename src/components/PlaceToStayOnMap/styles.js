import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 5,
        height: 140,
        flexDirection: 'row',
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        flex: 1,
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    textContainer: {
        marginHorizontal: 10,
        flexShrink: 1
    },
    bedroom: {
        marginVertical: 10,
        fontSize: 14,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 18,
        color: 'black',
    },
    prices: {
        fontSize: 18,
        marginVertical: 10
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold',
        color: 'black'
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    }
});

export default styles;