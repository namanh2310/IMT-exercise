import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

const result = ({result}) => {

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.result}>{result}</Text>
    </View>
  )
}

export default result

const styles = StyleSheet.create({
    resultContainer: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },

    result: {
        position: 'absolute',
        bottom: '5%',
        right: '8%', 
        color: 'white',
        fontSize: 64
    }

});