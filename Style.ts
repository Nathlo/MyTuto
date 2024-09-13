import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {flex: 1,
                backgroundColor: 'red',
                padding: 10,
    },
    menu: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 5
    },
    box: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },
    titleText: {
        fontSize: 18,
        fontWeight: '700',
    },
    content: {
        backgroundColor: 'brown',
        flex: 1,
        
    },


});