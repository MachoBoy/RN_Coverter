import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ( {onPress, children} ) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
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