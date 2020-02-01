import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import {ButtonContainer1} from './Button';
import {ButtonContainer2} from './Button';
import {Linkurl} from './Button';


class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
      }
    render() {
        const loginRegLink = (
            <ul className="navbar-nav " >
             <Link to="">
             <li className="mr-3">
              <ButtonContainer>
                <strong>
                Log in
                </strong>
                
               
             </ButtonContainer>
              </li>
             </Link>
             <Link to="" >

             <li className="mr-4">
              <ButtonContainer1>
                <strong>
                Sign up
                </strong>
                  
                
            </ButtonContainer1>
            </li>
            </Link>
            </ul>
          )
      
          const userLink = (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                  Logout
                </a>
              </li>
            </ul>
          )
      
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-light bg-light  px-sm-5 "  >
                <Link to="/" className="ml-5">
                    <ButtonContainer2>
                        <span className="ml-3">
                        <i class="fab fa-twitter"></i>
                        </span>
                    </ButtonContainer2>
                </Link>


               
               
        <SearchWrapper>
        <span className="ml-2">
            <i className="fas fa-search"/>
            </span>
            <SearchBar placeholder="Search Twitter"  />
           
        </SearchWrapper>


       
        {localStorage.usertoken ? userLink : loginRegLink}
        
                <Link to="/" className="">
                    <ButtonContainer2>
                        <span className="">
                        <i class="fas fa-ellipsis-h"></i>
                        </span>
                    </ButtonContainer2>
                </Link>
               
            </NavWrapper>
        );
    }
}

export default Navbar;

const NavWrapper = styled.nav`
    background : var(--mainWhite);
    .nav-link{
        color: var(--mainDark) !important;
        font-size: 1rem;
        text-transform: capitalize;
    }
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background:  var(--abu) ;
  border-radius: 3rem;
  border: 0.05rem solid #cbd2d9;
  margin-left: 2rem;
  margin-right: 7rem;
  box-shadow: none;
  
`


const SearchBar = styled.input`
  outline: none;
  border: none;
  width: 40rem;
  padding: 0.5rem ;
  color: --mainDark;
  background: transparent;
  font-size: 1rem;
  font-weight: 100;
  `