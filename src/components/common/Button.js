import React from 'react';
import { Text, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

const Button = ( {onPress, children, flagList, fromCurrency} ) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableHighlight onPress={onPress} style={buttonStyle}>
           <Text>
               {children}
           </Text>
        </TouchableHighlight>
    );
};

const styles = {
    buttonStyle: {
        width: 100,
        height: 50,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da'
    }
};

export { Button };