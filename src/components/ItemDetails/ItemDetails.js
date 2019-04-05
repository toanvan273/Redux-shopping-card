import React, { Component } from 'react'
import { Button, Collapse,  Media, Row, Col } from 'react-bootstrap'

export default class ItemDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    render(){
        
        return(
            <>
                <Button
                    className="item-detail-button"
                    // bsStyle="link"
                    onClick={()=> this.setState({open: !this.state.open})}
                >
                { this.state.open === false ? `See` : `Hide` } item details
                { this.state.open === false ? ` +` : ` -` }
                </Button>
                <Collapse in={this.state.open}>
                    <Media>
                            <img 
                            width={100}
                            height={100}
                            alt='thumbnail'
                            src="http://gearshop.vn/upload/thumbs/products/Alpha/Astra/500x417alpha_gamer_astra_black(1).jpg"
                            />
                        <Media.Body>
                            <p>Essentials by OFM Gaming Chair</p>
                            <Row className="show-grid">
                                <Col md={6}>
                                <strong>{`$${this.props.price}`} </strong>
                                <br/>
                                <strong className="price-strike">{`$${this.props.price}`} </strong>
                                </Col>
                                <Col md={6}> Qly: 1</Col>
                            </Row>
                        </Media.Body>
                    </Media>
                </Collapse>
            </>
        )
    }
}