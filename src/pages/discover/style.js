import styled from 'styled-components';


export const DiscoverWrapper = styled.div`
    .top{
        height:30px;
        background-color:#c20c0c;
    }

`

export const TopMenu = styled.div`
    display:flex;
    padding-left:200px;
    position:relative;
    top:-4px;
    .item{
        a{
            display:inline-block;
            height:20x;
            line-height:20px;
            padding: 0 13px;
            margin:7px 17px 0 0;
            color:#fff;
        }
        a:hover{
            text-decoration:none;
            background-color:#9b0909;
            border-radius:20px;
        }
        a.active{
            text-decoration:none;
            background-color:#9b0909;
            border-radius:20px;
        }  
    }
`