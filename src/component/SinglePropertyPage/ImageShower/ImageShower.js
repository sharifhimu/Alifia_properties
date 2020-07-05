import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap';

import './ImageShower.css';
import {info} from './ImageShowerInfo';

export default function ImageShower() {

    const [currentImage, setcurImage] = useState();

    const showImage = (imgName) => {
        // let curImage = document.getElementById('currentImg');
       
        // let theSource = "{require('../../../image/"+ imgName + "')}";
        // curImage.src = theSource;
        
        // setcurImage(curImage.src);
        // console.log(imgName);
        setcurImage(imgName);
        
    }

    return (

        

        <div >

       
                  <>      
            <div className="relative "> 
        <img className="large-img" id="currentImg"  src={require(`../../../image/${ currentImage ? currentImage :  'bg3.png'  }` )}  />

            </div>
        
            <div style={{   marginTop: '10px' }}>
         <Row style={{   width: '100%', margin: '0' }}>
            
         {info.map((prop,i) =>{ 
                return(

            <Col 
            className="relative col-padding slide-hover" >

                 <img className="template"
                  src={info[i].img} 
                  alt="1"
                    onClick={ () => showImage (info[i].imgname) } 
                    />
                    
                    </Col>

                    )
                    } )}

            {/* <Col className="slide-hover" style={{ position: 'relative' ,padding: '0'}}><img style={{ width: '95%', height: '100%' }} src={require('../../../image/bg2.png')} alt="2"  onClick={ () => showImage('bg2.png')} /></Col>
            <Col className="slide-hover" style={{ position: 'relative' ,padding: '0'}}><img style={{ width: '95%' , height: '100%'}} src={require('../../../image/bg.png')} alt="3"  onClick={ () => showImage('bg.png')} /></Col>
            */}
            
            
            </Row>
            </div>
            </>

           

        </div>
    )
}
