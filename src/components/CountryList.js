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
import { fetchRateService } from '../actions';

class ConturyList extends Component {

    renderItemList(fromCurrency, toCurrency) { 
        return(
            <ScrollView>
                {this.props.rates && Object.keys(this.props.rates).map((currencyCode) => {
                    return (
                        <TouchableOpacity key={currencyCode} onPress={() => this.props.countryOnPress(currencyCode)}> 
                            <CardSection style={{borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', height: 130}}>
                                <Image style={{alignSelf: 'flex-end'}} source={this.props.flagList[currencyCode].flag}/>   
                                <Text style={{paddingLeft: 20, fontSize: 18, paddingTop: 15}}>{this.props.flagList[currencyCode].label}</Text>
                                <Text style={{alignSelf: 'flex-end', fontSize: 14, paddingLeft: 5 }}>{ '('+currencyCode+')'}</Text>  
                            </CardSection>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        )
    }

   
    render() {
        const { 
            visible, 
            closeModal, 
            rates, 
            flagList, 
            fromCurrency, 
            fromCurrencySelect,
            toCurrency,
            toCurrencySelect,
            countryOnPress, 
        } = this.props;

        return (
            <Modal
                visible={visible}
                transparent={false}
                animationType="slide"
                onRequestClose={() => {this.props.closeModal()}}
            >
                <View>
                    <Header HeaderText={"Country List"} />
                        {this.renderItemList(fromCurrency, toCurrency)} 
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