import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    controlsRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        color: '#8d8d8d'
    },
    button: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#676767',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    control: {
        fontSize: 20,
        color: '#474747'
    },
    quantity: {
        color: 'black',
        marginHorizontal: 20,
        fontSize: 16
    },
    searchButton: {
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10
    },
    searchButtonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }

});

export default styles;