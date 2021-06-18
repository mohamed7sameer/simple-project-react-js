import Styled from 'styled-components' ;


export const SocialMedia = Styled.div`
    height: auto;
    overflow: hidden;
`

export const SocialMediaSocial = Styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${(props) => props.iconId == "1" ? '#3b5998' : ''};
    background: ${(props) => props.iconId == "2" ? '#498cbf' : ''};
    background: ${(props) => props.iconId == "3" ? '#cc2127' : ''};
    @media (max-width:991px) {
        width: 100%;
        float: none;
    }
`


export const SocialMediaIcon = Styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px
`

export const SocialMediaParagraph = Styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff
`



export const SocialMediaParagraphSpan = Styled.span`
    display: block;
    margin-bottom: 8px;
    &.info2{
        font-weight: normal
    }
`



