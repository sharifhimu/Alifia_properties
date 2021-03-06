import React from "react";
import {Container, Row, Col} from 'react-bootstrap'; 
import CustomSelect from "./CustomSelect";

import {MdKeyboardArrowRight} from 'react-icons/md';


import "./SearchCustom.css";

export default class SearchCustom extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          showList: false,
          defaultPropertyText: "Property Type",
          countryList: [
            { id: 1, name: "Land" },
            { id: 2, name: "Apartment" },
            { id: 3, name: "House" },
           
          ],
          
          defaultLocationText: "Location",
          defaultPlotText: "Plot Size"
        };
      }

      render() {
        return (

            <div className="test">

                <Container className="searchcontainer">

                <div className="searchuptext">
                <h1>Properties</h1>
                
                </div>

                <div className="searchuptext2">
                 <h3> Listings </h3>  
                 <div className="homelink"> 
                <a href="/">  Home </a> <MdKeyboardArrowRight  style={{ fontSize: '22px', color: 'rgba(0,0,0,.5)' }}  /> <a href="/" style={{ color: 'rgba(0,0,0,.5)' }}> Properties </a>
                </div>
                </div>

                <Row>  

               <Col lg={3} xs={6} className="searchcustom-box" style={{  zIndex: '11' }}> 
          <CustomSelect
            defaultText={this.state.defaultPropertyText}
            optionsList={this.state.countryList}
          />

            </Col>

            <Col lg={3} xs={6} style={{ zIndex: '10' }}> 
          <CustomSelect
            defaultText={this.state.defaultLocationText}
            optionsList={this.state.countryList}
          />

            </Col>

            <Col lg={3} xs={6} style={{ zIndex: '10' }}> 
          <CustomSelect
            defaultText={this.state.defaultPlotText}
            optionsList={this.state.countryList}
          />

            </Col>

            <Col xs={6} lg={3} className="searchcustom-searchbtn">
                        <button className="searchbtn"> SEARCH NOW </button>
                    
                    </Col> 

                
           </Row>     
        </Container>
        </div>

        )
      }








}