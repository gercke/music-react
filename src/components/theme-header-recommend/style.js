import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .left{
        display:flex;
        align-items:center;

        .title{
            font-size:20px;
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
            margin-right: 20px;
            cursor:pointer;
        }
        
        .keywords {
            display:flex;

            .item{
                .divider{
                    color:#ccc;
                    margin: 0 15px;
                }
                a{
                    cursor: pointer;
                }
                a:hover{
                    text-decoration:underline;
                }
            }

        }
    }

    .right{

        a{
                    cursor: pointer;
        }
        a:hover{
            text-decoration:underline;
        }
        .icon{
            display:inline-block;
            height:12px;
            width: 12px;
            background-position: 0 -240px;
            margin-left:4px;
            vertical-align:middle;
        }
    }
`
    


