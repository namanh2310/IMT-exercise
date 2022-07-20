import { TouchableOpacity,StyleSheet,View, Text } from 'react-native'
import React from 'react'

const other = ({handleClear}) => {

    const items = ['+/-', '%']

  return (
    <View style={styles.BtnContainer}>

        <TouchableOpacity 
        style={styles.button}
        onPress = {handleClear}
        >
            <Text
            style={styles.btnText}
            >AC
            </Text>
        </TouchableOpacity>

    {items.map((item,index) => (
        <TouchableOpacity key={index} style={styles.button}>
            <Text
            style={styles.btnText}
            >{item}
            </Text>
        </TouchableOpacity>
    ))}
</View>
)
}

export default other

const styles = StyleSheet.create({
    BtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        height: '20%',
        padding: 0,
        margin: 0
    },

    button: {
        flex: 1,
        height: '100%',
        backgroundColor: '#D6D6D6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black'
    },

    btnText: {
        fontSize: 28,
        color: 'black'
    }

});