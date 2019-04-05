import React, {Component} from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
// import { styles } from 'ansi-colors';

export default class PickupSaving extends Component{
    render(){
        var styles = {
            pickupSavings: {
                textDecoration: 'underline'
            },
            totalSavings: {
                color: 'red',
                fontWeight: 900
            }
        }
        const tooltip = (
            <Tooltip id="tooltip">
                <p>Pickup your order in the store helps cut costs, and...</p>
             </Tooltip>
        )
      
        return(
            <Row className="show-grid">
                <Col md={6}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                        <div style={styles.pickupSavings}>Pickup Saving</div>
                    </OverlayTrigger>
                </Col>
                <Col md={6} style={styles.totalSavings}> 
                    {`$${this.props.price}`} 
                </Col>
            </Row>
        )
    }
}