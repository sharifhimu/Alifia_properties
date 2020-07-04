import React from "react";
import {Container, Row, Col} from 'react-bootstrap'; 
import CustomSelect from "./CustomSelect";

import {MdKeyboardArrowRight} from 'react-icons/md';
import {IoIosArrowDown} from 'react-icons/io';

import "./SearchCustom.css";

export default class SearchCustom extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          showList: false,
          defaultSelectText: "Property Type",
          countryList: [
            { id: 1, name: "Australia" },
            { id: 2, name: "Brazil" },
            { id: 3, name: "China" },
            { id: 4, name: "Denmark" },
            { id: 5, name: "Egypt" },
            { id: 6, name: "Finland" },
            { id: 7, name: "Ghana" },
            { id: 8, name: "Hungary" },
            { id: 9, name: "India" },
            { id: 10, name: "Japan" }
          ]
        };
      }

      render() {
        return (

            <div style={{  padding: '10rem 0 2rem 0', backgroundColor: 'rgba(204,187,143,.1)' }} className="test">

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

               <Col lg={3} xs={6} style={{ marginBottom: '10px', zIndex: '11' }}> 
          <CustomSelect
            defaultText={this.state.defaultSelectText}
            optionsList={this.state.countryList}
          />

            </Col>

            <Col lg={3} xs={6} style={{ zIndex: '10' }}> 
          <CustomSelect
            defaultText={this.state.defaultSelectText}
            optionsList={this.state.countryList}
          />

            </Col>

            <Col lg={3} xs={6} style={{ zIndex: '10' }}> 
          <CustomSelect
            defaultText={this.state.defaultSelectText}
            optionsList={this.state.countryList}
          />

            </Col>

            <Col xs={6} lg={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                        <button className="searchbtn"> SEARCH NOW </button>
                    
                    </Col>

                
           </Row>     
        </Container>
        </div>

        )
      }








}