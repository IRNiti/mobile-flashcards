import {Platform, StyleSheet} from 'react-native'
import {buttonColor, buttonText, cardBackgroundColor, gray} from '../utils/colors'

export const defaultStyles = StyleSheet.create({
    card: {
        backgroundColor: cardBackgroundColor,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        elevation: 3
    },
    submitBtn: {
        backgroundColor: buttonColor,
        padding: 10,
        borderRadius: Platform.OS === 'ios' ? 7 : 2,
        height: 45,
        marginLeft: Platform.OS === 'ios' ? 40: 30,
        marginRight: Platform.OS === 'ios' ? 40: 30,
        marginTop: 30,
    },
    submitBtnText: {
        color: buttonText,
        fontSize: 18,
        textAlign: 'center',
    },
    headerTxt: {
        fontSize: 22,
        marginBottom: 10
    },
    descriptionTxt: {
        fontSize: 15,
    },
    formInputTxt: {
        fontSize: 18,
        marginBottom: 10,
        marginTop: 25
    },
    formInputBox: {
        fontSize: 16,
        borderBottomColor: gray,
        borderBottomWidth: 1,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    }
})