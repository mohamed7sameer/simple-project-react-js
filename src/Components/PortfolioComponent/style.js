import Styled from "styled-components";



export const Portfolio = Styled.div`
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const PortfolioTitle = Styled.h2`
    text-align: center;
    font-size: 35px
`

export const PortfolioTitleSpan = Styled.span`
    font-weight: normal
`

export const PortfolioList = Styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const PortfolioListItem = Styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background: ${(props)=> props.active? '#eb5424' : '' };
    color: ${(props)=> props.active? '#fff' : '' };
    @media (max-width:575px) {
            display: block;
            margin: auto
    }
    
`

export const Box  = Styled.div`
display: flex;
flex-wrap: wrap;
`

export const BoxItem = Styled.div`
width: 25%;
font-size: 0;
position: relative;
@media (max-width:575px) {
    width: 100%;
}
@media (min-width:576px) and (max-width : 768px ){
        width: 50%;
}
&:hover .overlay {
     opacity: 1
}
`

export const BoxItemImg = Styled.img`
    width: 100%
`

export const BoxItemOverlay = Styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0
`

export const BoxItemOverlaySpan = Styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`

// .box div:hover .overlay {
//     opacity: 1
// }



