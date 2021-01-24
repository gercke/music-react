import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
    height:120px;
    width:250px;
    .content{
        background-position:0 0;
        height:120px;
        .p-name{
            display:block;
            width:205px;
            height:76px;
            margin:0 auto;
            padding: 16px 0;
            line-height:22px;
            color:#666;
        }
        a{
            display:block;
            width:100px;
            height: 30px;
            line-height:30px;
            background-position: 0 -195px;
            margin: 0 auto;        
            text-align: center;
            color: #fff;
            text-shadow: 0 1px 0 #8a060b;
        }
        a:hover{
            background-position:-110px -195px;
        }
    }

`