import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {

    render() {
        const {titleStyle} = styles;
        return (
            <TouchableWithoutFeedback>
                <View>
                    <Text style={titleStyle}>{this.props.rates}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}


export default ListItem;
