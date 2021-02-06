import styled from 'styled-components'

export const SetSingerWrapper = styled.div`
    width: 250px;
    height:455px;

    .singer{
        height:23px;
        position:relative;
        margin:5px 20px;
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

    .singer-list {
        padding: 20px;
        padding-top:0;
        .item {
            display: flex;
            height: 62px;
            margin-top: 14px;
            background-color: #fafafa;
            text-decoration: none;

            :hover {
                background-color: #f4f4f4;
            }

        img {
            width: 62px;
            height: 62px;
        }

        .info {
            margin: 8px 0 0 10px;
            .title {
                color: #333;
                font-size: 14px;
                font-weight: 700;
            }

            .name {
                margin-top: 5px;
            }
        }
        }
    }

    .apply-for {
        a {
            color: #333;
            font-weight: 700;
            text-align: center;
            display: block;
            width:210px;
            height: 30px;
            line-height: 30px;
            margin: 0 auto;
            border-radius: 4px;
            background-color: #fafafa;
            border: 1px solid #c3c3c3;
            text-decoration: none;
        }
    }
    
`