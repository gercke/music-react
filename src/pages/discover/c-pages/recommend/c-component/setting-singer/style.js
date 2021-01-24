import styled from 'styled-components'

export const SetSingerWrapper = styled.div`
    width: 250px;
    height:455px;
    .content{
        margin-top:15px;

        .singer{
            height:23px;
            position:relative;
            margin:0 20px;
            border-bottom: 1px solid #ccc;
            color:#333;
            span{
                float:left;
                font-weight: bold;
            }
            a{
                color: #666;
                font-weight:normal;
                float:right;
                cursor:pointer;
                &:hover{
                    text-decoration: underline;
                }
            }
        }

        ul{
            width:250px;
            margin: 0 auto;
            li{
                height:62px;
                width:190px;
            }
        }
    }
`