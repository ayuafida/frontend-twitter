import styled from 'styled-components';

export const Linkurl = styled.text`
    color : var(--mainWhite);
    &:hover{
        color: var(--mainDark);
    }
` ;

export const Linkurl1 = styled.text`
    color : var(--mainDark);
    
` ;

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1rem;
background:var(--mainWhite);
color : var(--lightBlue);
border-radius: 40px;
border : 1px;
border-style: solid;

&:hover{
    background: var(--mainBlue);
    color: var(--mainWhite);
}
` ;

export const ButtonContainer1 = styled.button`
    text-transform: capitalize;
    font-size: 1rem;
    background:var(--lightBlue);
    color : var(--mainWhite);
    border-radius: 40px;
    border : transparent;
   
    &:hover{
        background: var(--mainBlue);
        color: var(--mainWhite);
    }
` ;

export const ButtonContainer2 = styled.button`
    text-transform: capitalize;
    font-size: 1rem;
    background:var(--mainWhite);
    color : var(--lightBlue);
    border-radius: 40px;
    border : transparent;
   
   
` ;