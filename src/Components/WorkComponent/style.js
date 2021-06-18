import Styled from "styled-components";

export const Work = Styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #fff
`

export const WorkTitle = Styled.h2`
    font-size: 60px; 
`

export const WorkTitleSpan = Styled.span`
    font-weight: normal
`

const DivColor = Styled.div`
background-color: #EEE;
`

export const WorkPart = Styled(DivColor)`
margin-top: 20px;
height: auto;
padding: 100px 0;
border: 1px solid #888;
box-sizing: border-box;
text-align: center;
border-color: ${(props) => props.color? props.color: '' }
`




export const WorkPartIcon = Styled.i`
    color: #888;
    margin-bottom: 20px
`

export const WorkPartTitle = Styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const WorkPartLine = Styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const WorkPartDesc = Styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`
    
