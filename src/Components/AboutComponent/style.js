import Styled from 'styled-components';
export const Creative = Styled.div`
    height: 500px;
    background: url('assets/images/creative/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) {
        height: auto
    }
`

export const CreativeInfo = Styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none
    }
`

export const CreativeInfoTitle = Styled.h2`
    font-weight: bold;
    font-size: 50px
`

export const CreativeInfoTitleSpan = Styled.span`
    font-weight: normal
`

export const CreativeInfoDir = Styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    @media (max-width:991px) {
        font-size: 30px
    }
`

export const CreativeInfoDesc = Styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    & a{
        text-decoration: none
    }
    
`

// const CreativeInfoDescLink = Styled.Link`



//     text-decoration: none
// `

// @media (max-width:991px) {
//     .creative {
//         height: auto
//     }
//     .creative .creative-info {
//         width: 100%;
//         padding-top: 10px;
//         float: none
//     }
    
//     .creative .creative-info .info-dir {
//         font-size: 30px
//     }
// }

