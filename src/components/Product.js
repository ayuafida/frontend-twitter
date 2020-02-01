import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';
import PropTypes from 'prop-types';

class Product extends Component {
   
    render() {
        
        const {id,nama_kursus,image,total_durasi,jumlah_materi,total_murid,jumlah_vidio,harga,flashSale, productCart,statussaya}= this.props.product;
        console.log(this.props.product)
        return(
        
        
<div class="card  " max-width = "540px">
                
  <div class="row no-gutters">
    <div class="col-md-4 ">
      <img src="https://pbs.twimg.com/profile_images/1148261395550613505/8ei_UuLc_400x400.png" width="100px" alt="status" class="adobe2"/>
    </div>
    <div class="col-md-8">
        
      <div class="card-body min-vw-100" >
        <p class="card-title"><strong>Adobe</strong> <img src={require("../gambar/ceklis.jpg")} /> @adobe</p> 
        <p class="card-text" >{statussaya}</p>
      
        <div class="row">
                            <div class="liskom">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                    <img src={require('../gambar/komentar.png')} alt="" /> 
                                </button>
                            </div>
                            <div class="liskom">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                    <img src={require('../gambar/reload.png')} alt="" />
                                </button>
                            </div>
                            <div class="liskom">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                    <img src={require('../gambar/like.png')} alt="" />
                                </button>
                            </div>
                            <div class="liskom">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal">
                                    <img src={require('../gambar/upload.png')} alt="" />
                                </button>
                            </div>
                        </div>
                          
      </div>
    </div>
  </div>

                
                </div>
               
            
        );
    }
}

export default Product;

Product.propTypes = {
    statusss : PropTypes.shape({
        id : PropTypes.number,
        img : PropTypes.string,
        materi : PropTypes.string,
        murid : PropTypes.string,
        durasi : PropTypes.string,
        title: PropTypes.string,
        price : PropTypes.number,
        inCart : PropTypes.bool,

    }).isRequired
};

const ProductWarpper = styled.div`
.card{
    border : 0.04rem solid rgba(0,0,0,0.2);
    max-width: 540px;
}

.card-footer{
    background : transparent;
    border-top : transparent;
    
}
&:hover{
    .card{
        border : 0.04rem solid rgba(0,0,0,0.2);
        box-shadow : 2px 2px 5px 0px rgba(0,1,0,0.2);
    }
}
.img-container{
    position : relative;
    overflow : hidden;
}
`;

const Deco = styled.div`
    font-size: 0.7rem;
    text-decoration: line-through; 
`

const Deco1 = styled.div`
    font-size: 0.7rem;
    color: grey;  
`
