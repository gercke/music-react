
import styled from 'styled-components'

export const BannerWrapper = styled.div`
    background: url(${props => props.bgImage});
    background-position: center center;
    background-size: 6000px;
    .banner{
        height:270px;
        background-color:#ff22;
        display:flex;
        position:relative;
    }
`
export const BannerLeft = styled.div`
    width:730px;
    .banner-item{
        height:270px;
        overflow:hidden;
    }
    .image{
        width: 100%;
    }
    .ant-carousel .slick-dots li button{
        width: 6px;
        height: 6px;
        border-radius:50%;
        background:#da0000;
        
        :hover{
            background:#da0000;
        }
        :active{
            background:#da0000;
        }
    }
`

export const BannerRight = styled.div`
    width:254px;
    .download-pic{
        height:270px;
        width:100%;
        position:relative;
        background:url(${require("@/assets/img/download.png").default});
        a{
            display:block;
            position:absolute;  
            width:215px;
            height:56px;
            margin:186px 0 0 19px;
            background:url(${require("@/assets/img/download.png").default});
            background-position:-19px 8993px;
            text-decoration:none;
        }
        a:hover{
            cursor:pointer;
        }
    }
` 

export const BannerControl = styled.div`
    
    .btn{
        width:37px;
        height:64px;
        top:50%;
        position: absolute;
        transform:translateY(-50%);
        cursor:pointer;
        background-color:transparent;
        background-image:url(${require("@/assets/img/banner_sprite.png").default});
    }
    .btn:hover{
        background-color: #666163;
    }
    .left{
        left:-68px;
        background-position: 0 -360px;
    }
    .right{
        right:-68px;
        background-position: 0 -508px;
    }
`