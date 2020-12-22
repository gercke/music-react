import styled from 'styled-components'

export const FooterWrapper = styled.div `
    display:flex;
    height:172px;
    background-color:#f2f2f2;
    border-top:1px solid #d3d3d3;

    .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
`
export const FooterLeft = styled.div `
    width:520px;
    height:115px;

    .detail{
        width:520px;
        height:24px;
    }

    .d-link{
        margin-top:15px;
        width:520px;
        line-height:24px;
    }

    .d-link a{
        color: #999;
        margin-right:7px;
    }
    .d-link a:hover{
        cursor:pointer;
        text-decoration:underline;
    }

    .d-link span{
        margin-right:7px;
        color:#999;
    }

    .copyright{
        width:520px;
        line-height:24px;
        color:#666;
        span{
            margin-right:10px;
        }
        a:hover{
            text-decoration:underline;
        }
    }

    .report{
        width:520px;
        line-height:24px;
        span{
            margin-right:10px;
            color:#666;
        }
        a{
            color:#333;
        }
        a:hover{
            color: #333;
            text-decoration:underline;
        }
    }

    .info{
        width:520px;
        line-height:24px;
        span{
            margin-right:10px;
            color:#666;
        }
        a{
            color:#666;
        }
        a:hover{
            color:#666;
            text-decoration:underline;
        }
    }

`
export const FooterRight = styled.div`
    display:flex;

    .item{
        display:flex;
        align-items:center;
        flex-direction:column;
        margin-right:40px;

        .link{
            display:block;
            width:50px;
            height:45px;

            background-image:url(${require("@/assets/img/sprite_footer_02.png").default});
            background-size: 110px 450px;
        }
        :nth-child(1) .link {
            background-position: -60px -101px;
        }
        :nth-child(2) .link {
            background-position: 0 0;
        }
        :nth-child(3) .link {
            background-position: -60px -50px;
        }
        :nth-child(4) .link {
            background-position: 0 -101px;
        }

        .title{
            display:block;
            width:52px;
            height:10px;
            margin-top:5px;
            background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
            background-size:180px 100px;
        }
        :nth-child(1) .title{
            background-position:-1px -90px;
        }
        :nth-child(2) .title{
            background-position:0px 0px;
        }
        :nth-child(3) .title{
            background-position:0px -54px;
        }
        :nth-child(4) .title{
            background-position:-1px -72px;
        }
    }
`
