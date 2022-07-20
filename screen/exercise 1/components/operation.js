import { TouchableOpacity,StyleSheet, View, Text } from 'react-native'
import React from 'react'

const operation = ({handlePress,handleCalculate}) => {

    const operations = ['+','-','*','/']

  return (
    <View style={styles.BtnContainer}>
        {operations.map((operation,index) => (
            <TouchableOpacity 
            key={index} 
            style={styles.button}
            onPress={() => handlePress(operation)}
            >
                <Text
                style={styles.btnText}
                >{operation}
                </Text>
            </TouchableOpacity>
        ))}

            <TouchableOpacity 
            style={styles.button1}
            onPress = {handleCalculate}
            >
                <Text
                style={styles.btnText}
                >=
                </Text>
            </TouchableOpacity>
            
    </View>
  )
}

export default operation

const styles = StyleSheet.create({
    BtnContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
    },
    
    button: {
        width: '100%',
        height: '20%',
        backgroundColor: '#F39737',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black'
    },

    button1: {
        width: '100%',
        height: '20%',
        backgroundColor: '#F39737',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    
    btnText: {
        fontSize: 28,
        color: 'white'
    }

});