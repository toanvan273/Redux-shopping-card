import React, { Component } from 'react';
import './App.css';
import Subtotal from './components/Subtotal/Subtotal'
import PickupSavings from './components/PickupSavings/PickupSavings'
import TaxesFees from './components/TaxesFees/TaxesFees'
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'
import ItemDetails from './components/ItemDetails/ItemDetails'
import PromoCodeDiscount from './components/PromoCode/PromoCode'
import { connect } from 'react-redux'
import { handleChange } from './actions/promoCodeActions'
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            total: 100,
            pickupSavings: -3.85,
            taxes: 0,
            EstimatedTotal: 0,
            disablePromoButton: false,
            discount: ['ABCD','abcd','DISCOUNT','34P24066']
        }
    }
    componentDidMount = () => {
        this.setState({
            taxes: (this.state.total + this.state.pickupSavings)*0.0875,
        },
        function(){
            this.setState( {  EstimatedTotal: (this.state.total + this.state.pickupSavings + this.state.taxes) })
        }
        )
       
    }

    giveDiscountHandler = () => {
        const A = this.state.discount
        if(
            A.map( e =>  this.props.promoCode === e )
        ){
            this.setState({
                EstimatedTotal: this.state.EstimatedTotal*0.9
            },
            function(){
                this.setState({
                    disablePromoButton: true
                })
            }
            )
        }
    }
  
  render() {
    return (
      <div className="container">
            <div className="purchase-card">
               <Subtotal price={this.state.total.toFixed(2)}/>  
               <PickupSavings price={this.state.pickupSavings} />
               <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
               <hr />
               <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
               <ItemDetails price={this.state.EstimatedTotal.toFixed(2)}/>
               <hr />
                <PromoCodeDiscount 
                giveDiscount={()=> this.giveDiscountHandler()}
                isDisable={this.state.disablePromoButton}
                />
            </div>
         
      </div>
    );
  }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(App);
