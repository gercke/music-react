import styled from 'styled-components'
// import img1 from '@/assets/img/sprite_01.png'

export const HeaderWrapper =styled.div`
    height:75px;
    background-color:#242424;
    font-size:14px;
    color:#ccc;

    .content{
        height:70px;
        display:flex;
        justify-content: space-between;
    }

    .divline{
        height:5px;
        background-color:#d80000;
    }
`


export const HeaderLeft = styled.div`
    display:flex;
    .logo{
        display:block;
        width:176px;
        height:69px;
        background-position:0 0;
        text-indent:-9999px;
    }

    .select-list{
        display:flex;
        line-height:70px;
    
        .select-item{
            position: relative;
            a{
                display:block;
                padding:0 20px;
                color:#ccc;
            }

            :last-of-type a {
                position: relative;
                ::after{
                    content:"";
                    background-image:url(${require("../../assets/img/sprite_01.png").default});
                    background-position:-190px 0;
                    position: absolute;
                    top: 20px;
                    right: -15px;
                    width: 28px;
                    height: 19px;
                }
            }
            a:hover{
                color:#fff;
                background:#000;
                text-decoration:none;
            }
            a.active{
                color:#fff;
                background:#000;
                text-decoration:none;
            }
            .active .icon{
                position:absolute;
                display:inline-block;
                width:12px;
                height:7px;
                left:50%;
                bottom:-1px;
                transform:translate(-50% , 0);
                background-position: -226px 0;
            }
        }
    }
`

export const HeaderRight = styled.div`

`