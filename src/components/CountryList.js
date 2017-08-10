import React, { Component } from 'react';
import { 
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Modal
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button, Header } from './common';
import ListItem from './ListItem';
import flagList from './FlagList';
import { fetchRateService } from '../actions';

class ConturyList extends Component {
    constructor(props){
        super(props);
        this.state = {
            fromCurrency: 'CAD',
            fromCurrencySelect: 'false',
            toCurrency: 'CAD',
            toCurrencySelect: 'false',
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
    }

    componentDidMount(){
        this.props.fetchRateService();
    }

    renderItemList() {
        return(
            <ScrollView>
                {Object.keys(this.state.serverAPI.rates).map((currencyCode) => {
                    return (
                        <TouchableOpacity onPress={() => this.countryPress(currencyCode)}>
                            <CardSection style={{borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', height: 130}}>
                                <Image style={{alignSelf: 'flex-end'}} source={flagList[currencyCode].flag}/>
                                <Text style={{alignSelf: 'flex-end'}}>{currencyCode}</Text>
                                <Text style={{paddingLeft: 20, fontSize: 18, paddingTop: 15}}>{flagList[currencyCode].label}</Text>
                            </CardSection>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        )
    }

    countryPress(currencyCode) { 
        if(this.state.fromCurrency) {
            this.setState({ fromCurrency: currencyCode, fromCurrencySelect: !this.state.fromCurrencySelect })
        } else {
            this.setState({ toCurrency: currencyCode, toCurrencySelect: !this.state.toCurrencySelect })
        }
    }
        
        // this.setState(startCurrency ? {startCurrency: countryDollarCode, startCurrencySelecting: false} : {toCurrency: countryDollarCode, toCurrencySelecting: false})} 
        //     key={countryDollarCode} style={[{height: 50, alignItems: 'center', justifyContent: 'center'}, 
        //     countryDollarCode === (startCurrency ? this.state.startCurrency : this.state.toCurrency) && {backgroundColor: common.colors.background}]}>
        // console.log(currencyCode);
    
    
    render() {
        const { visible, closeModal } = this.props;
        return (
            <Modal
                visible={visible}
                transparent={false}
                animationType="slide"
                onRequestClose={() => {this.props.closeModal()}}
            >
            <View>
                <Header HeaderText={"Country List"} />
                    {this.renderItemList()}
            </View>
            
                
            </Modal>
        );
    }
}

const styles = {
    CardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0 ,0 ,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    },
    countryListView: {
        borderRadius: 4, 
        borderWidth: 0.5, 
        borderColor: '#d6d7da',
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    }
};

const mapStateToProps = state => {
    return {
        rateInfo: state.rateService.rateInfo,
    };
};

export default connect(mapStateToProps, { fetchRateService }) (ConturyList);