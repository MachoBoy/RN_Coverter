import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { Card, CardSection, Input, Button, Header, Confirm } from './common';
import { connect } from 'react-redux';
import { numberChange, numberClear, numberErase } from '../actions';
import flagList from './FlagList';
import Numpad from './Numpad';
import CountryList from './CountryList';

class ConvertForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            showFromModal: false, 
            showToModal: false,
            fromCurrency: 'CAD',
            fromCurrencySelect: false,
            fromCurrencyRate: 0,
            toCurrency: 'USD',
            toCurrencySelect: false,
            toCurrencyRate: 0,
            currency: '',
            serverAPI: {
                base: 'CAD',
                date: '2017-08-08',
                rates: {
                    "CAD": 1.0000,
                    "AUD": 0.99666,
                    "BGN": 1.3074,
                    "BRL": 2.4653,
                    "CHF": 0.76743,
                    "CNY": 5.2999,
                    "CZK": 17.458,
                    "DKK": 4.9725,
                    "GBP": 0.60455,
                    "HKD": 6.1695,
                    "HRK": 4.9492,
                    "HUF": 203.09,
                    "IDR": 10505,
                    "ILS": 2.8563,
                    "INR": 50.338,
                    "JPY": 87.426,
                    "KRW": 890.83,
                    "MXN": 14.141,
                    "MYR": 3.378,
                    "NOK": 6.2705,
                    "NZD": 1.0718,
                    "PHP": 39.793,
                    "PLN": 2.8423,
                    "RON": 3.051,
                    "RUB": 47.364,
                    "SEK": 6.4292,
                    "SGD": 1.0751,
                    "THB": 26.273,
                    "TRY": 2.7851,
                    "USD": 0.78862,
                    "ZAR": 10.539,
                    "EUR": 0.66849,
                }
            }
        }
        this.closeModal = this.closeModal.bind(this);
        this.countryListOnPress = this.countryListOnPress.bind(this);
        this.swapCurrency = this.swapCurrency.bind(this);
        this.calculateRate = this.calculateRate.bind(this);
    }

    closeModal() {
        this.setState( this.state.showFromModal ? { showFromModal: false } : { showToModal: false })
    }

    countryListOnPress(fromCurrency, currencyCode) {
        this.setState(fromCurrency ? { fromCurrencySelect: !this.state.fromCurrencySelect } : { toCurrencySelect: !this.state.toCurrencySelect })
        console.log('fromCurrency', this.state.fromCurrencySelect);
        console.log('toCurrency', this.state.toCurrencySelect);
        if( fromCurrency ) {
            this.setState({ fromCurrencyRate: this.state.serverAPI.rates[currencyCode] })
        } else {
            this.setState({ toCurrencyRate: this.state.serverAPI.rates[currencyCode] })
        }

        //calculateRate(this.props.digit, this.state.fromCurrency, this.state.toCurrency);

        console.log(this.state.fromCurrencyRate);
        console.log(this.state.toCurrencyRate);
        
        this.closeModal();
    }

    swapCurrency() {
        this.setState({ 
            fromCurrency: this.state.toCurrency, 
            toCurrency: this.state.fromCurrency 
        })
    }

    calculateRate(input, fromCurrency, toCurrency) {
        const exchangeRate = fromCurrency / toCurrency;
        return ( input * exchangeRate );
    }

    render() {
        const { currencyTextStyle, cardStyle } = styles;
        return (
            <View>
                <Header headerText={"Currency Converter"} />
                <Card>
                    <CardSection> 
                        <Button 
                            flagList={flagList}
                            fromCurrency={this.state.fromCurrency}
                            onPress={() => this.setState({ showFromModal: !this.state.showFromModal })}
                        >
                        {this.state.fromCurrency}
                        </Button>
                        <CountryList
                            visible={this.state.showFromModal}
                            closeModal={this.closeModal}
                            rates={this.state.serverAPI.rates}
                            flagList={flagList}
                            fromCurrency ={this.state.fromCurrency}
                            fromCurrencySelect={this.state.fromCurrencySelect}
                            countryListOnPress={this.countryListOnPress}
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
                            onPress={this.swapCurrency}
                        />
                    </View>

                    {/*ToCurrency*/}
                    <CardSection>
                         <Button onPress={() => this.setState({ showToModal: !this.state.showToModal })}>
                          
                        </Button>
                        <CountryList
                            visible={this.state.showToModal}
                            closeModal={this.closeModal.bind(this)}
                            rates={this.state.serverAPI.rates}
                            flagList={flagList}
                            toCurrency ={this.state.toCurrency}
                            toCurrencySelect={this.state.toCurrencySelect}
                            countryListOnPress={this.countryListOnPress.bind(this)}
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