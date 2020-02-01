import React, {Component} from 'react';
import Product from './Product';
import Comment from './Comment';
//import Title from './Title';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class ProductList extends Component {
    
    render() {
      
        return(
            <React.Fragment>

                <div className="py-2">

                
                    <div className="container">
                        
                        
                        <div className="row">
                        <img  src="https://pbs.twimg.com/profile_banners/63786611/1562601846/600x200" width="1067px"/>
                           <div className="adobe"> 
                           <img class="adobe3" src="https://pbs.twimg.com/profile_images/1148261395550613505/8ei_UuLc_400x400.png" width="150px"/>
                         <div>
                           
                         </div>
                           </div>
                           <div className="content-header">
                           <p>
                               <strong> Adobe</strong> <img src={require("../gambar/ceklis.jpg")} /> <br/>
                                 @Adobe </p>
                                <p>Changing the world through digital experiences. Need help? Visit us at <a href="http://helpx.adobe.com/support.html">http://helpx.adobe.com/support.html</a> or reach out to <a href="@AdobeCare">@AdobeCare</a></p>
                              
                              <Comment/>
                            </div>
                            <ProductConsumer>
                                {value => {
                                   return value.products.map(product=> {
                                       return <Product key={product.id} product={product}/>
                                   })
                                }}

                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default ProductList;