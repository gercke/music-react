import styled from 'styled-components'


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
        background-color:#c20c0c;
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
    display:flex;
    align-items:center;
    color:#ccc;
    font-size:12px;
    .input-center{
        display:flex;
    }
    .search{
        width:158px;
        height:32px;
        border-radius:32px;
        outline:none;
        border:0;
    }

    .search input{
        font-size:12px;
    }

    .button-auth{
        width:90px;
        height:32px;
        border-radius:20px;
        color: #ccc;
        line-height:32px;
        border: 1px solid #4F4F4F;
        background-color:#242424;
        margin-left:19px;
    }

    .button-auth:hover,:active{
        border: 1px solid #fff;
        cursor:pointer;
    }

    .denglu{
        display: block;
        width:50px;
        color:#787878;
        margin-top:2px;
        font-size:12px;
        background-color:#242424;
        margin-left:5px;
    }

    .denglu:hover{
        color:#999;
        cursor:pointer;
    }
    
`