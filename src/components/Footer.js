import React, {Component} from 'react';
import styled from 'styled-components';

class Footer extends Component {
    render() {
        return(
            <NavWrapper >
               
    <footer class="site-footer">
     

      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-6 col-xs-12">
             
             <p class="copyright-text">Copyright &copy; 2019 <strong> Ayu.id</strong>, All Rights Reserved.
            </p>
            
       
           
          </div>

        </div>
      </div>
</footer>
            </NavWrapper>
        );
    }
}

export default Footer;

const NavWrapper = styled.nav`
   
.site-footer
{
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-size:12px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}

.copyright-text
{
  margin:0
  text-align:center
}

{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}

{
  .site-footer
  {
    padding-bottom:0
  }
 
}

`;
