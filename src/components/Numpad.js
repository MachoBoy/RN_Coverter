import React, { Component } from 'react';
import { View } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { numberChange, numberClear, numberErase } from '../actions';

class Numpad extends Component {

    renderNumpad(digit) {
        return (
            <TouchableOpacity style={styles.numberButton} onPress={() => this.onButtonPress(digit)}>
                <Text style={styles.textStyle}>{ digit }</Text>
            </TouchableOpacity>
        )
    }

    onButtonPress(digit) {
        switch(digit) {
            case 'clear':
                console.log('clear');
                this.props.numberClear();
                break;
            case 'erase':
                console.log('erase');
                this.props.numberErase();
                break;
            default:
                console.log(digit);
                this.props.numberChange(digit);
                break;
        }
    }

    render() {
        const { numberpadContainer, numberpadRow } = styles;
        return (
            <View style={numberpadContainer}>
                <View style={numberpadRow}>
                    {this.renderNumpad('1')}
                    {this.renderNumpad('2')}
                    {this.renderNumpad('3')}
                </View>

                <View style={numberpadRow}>
                    {this.renderNumpad('4')}
                    {this.renderNumpad('5')}
                    {this.renderNumpad('6')} 
                </View>

                <View style={numberpadRow}>
                    {this.renderNumpad('7')}
                    {this.renderNumpad('8')}
                    {this.renderNumpad('9')}
                </View>

                <View style={numberpadRow}>
                    {this.renderNumpad('clear')}
                    {this.renderNumpad('0')}
                    {this.renderNumpad('erase')}
                </View>
            </View>
        );
    }
}

const styles = {
    numberpadContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 256
    },
    numberpadRow: {
        flexDirection: 'row',
        height: 64,
    },

    textStyle: {
        fontSize: 25,
        color: '#21b432',
        padding: 30
    },

    numberButton: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const mapStateToProps = state => {
    return {
        digit: state.numberPad.digit
    };
};

export default connect(mapStateToProps, {
    numberChange, numberClear, numberErase
})(Numpad);