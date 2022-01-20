import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from "../utils/constants";

export default class TotalBayar extends Component {
  submitTotalBayar = (totalBayar) => {
      const pesanan = {
        total_bayar: totalBayar,
        menus: this.props.keranjangs
      }
      axios.post(API_URL+"pesanans", pesanan).then((res) => {
        this.props.history.push('/sukses')
      })
  }

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
     <>

     {/* Web */}
      <div className="fixed-bottom d-none d-md-block" >
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h5>
              Total Bayar : <strong className="float-right mr-2">Rp. {numberWithCommas(totalBayar)}</strong>{" "}
            </h5>
              <Button 
              variant="primary" 
              size="sm" 
              className="mb-2 mr-2 mt-2"
              onClick={() => this.submitTotalBayar(totalBayar)} 
              style={{width:'100%'}}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> <strong>B A Y A R</strong>
              </Button>
          </Col>
        </Row>
      </div>

      {/* Web */}
      <div className="d-sm-block d-md-none">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h5>
              Total Bayar : <strong className="float-right mr-2">Rp. {numberWithCommas(totalBayar)}</strong>{" "}
            </h5>
              <Button 
              variant="primary" 
              size="sm" 
              className="mb-2 mr-2 mt-2"
              onClick={() => this.submitTotalBayar(totalBayar)} 
              style={{width:'100%'}}
              >
                <FontAwesomeIcon icon={faShoppingCart} /> <strong>B A Y A R</strong>
              </Button>
          </Col>
        </Row>
      </div>
     </>
    );
  }
}
