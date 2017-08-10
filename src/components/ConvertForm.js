import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Header, Confirm } from './common';
import { connect } from 'react-redux';
import { numberChange, numberClear, numberErase } from '../actions';
import Numpad from './Numpad';
import CountryList from './CountryList';

class ConvertForm extends Component {
    state = { showFromModal: false, showToModal: false };

    closeModal() {
        this.setState( this.state.showFromModal ? { showFromModal: false } : { showToModal: false })
    }

    render() {
        const { currencyTextStyle, cardStyle } = styles;
        return (
            <View>
                <Header headerText={"Currency Converter"} />
                <Card>
                    <CardSection> 
                        <Button onPress={() => this.setState({ showFromModal: !this.state.showFromModal })}>
                            
                        </Button>
                        <CountryList 
                            visible={this.state.showFromModal}
                            closeModal={this.closeModal.bind(this)}
                        />
                        {/*FromCurrency*/}
                        <Text style={currencyTextStyle}>
                            {this.props.digit}
                        </Text>
                    </CardSection>

                    {/*exchange button*/}
                    <View style={{alignItems: 'center'}}>
                        <Image 
                            style={{width: 50, height: 50 }}
                            source={require('../images/exchange.png')}
                        />
                    </View>

                    {/*ToCurrency*/}
                    <CardSection>
                         <Button onPress={() => this.setState({ showToModal: !this.state.showToModal })}>
                            
                        </Button>
                        <CountryList 
                            visible={this.state.showToModal}
                            closeModal={this.closeModal.bind(this)}
                        />
                        <Text style={currencyTextStyle}>
                            {this.props.digit}
                        </Text>
                    </CardSection>
                        <Numpad />
                </Card>
            </View>
        );
    }
}

const styles = {
    cardStyle: {
        paddingTop: 30
    },

    currencyTextStyle: {
        paddingTop: 10,
        paddingLeft: 15,
        fontSize: 25,

    }
}

const mapStateToProps = state => {
    return {
        digit: state.numberPad.digit
    };
};

export default connect(mapStateToProps, { 
    numberChange, numberClear, numberErase 
}) (ConvertForm);