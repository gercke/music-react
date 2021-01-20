import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
    flex: 1;

    .header{
        height: 120px;
        display:flex;
        margin-left:20px;
        padding-top:20px;

        .image{
            position: relative;
            width:80px;
            height:80px;

            .image_cover{
                position: 0 0;
            }
        }

        .info{
            margin: 5px 0 0 10px;

            a{
                
                color: #333;
                font-size: 14px;
                font-weight: 700;
            }
            a:hover{
                text-decoration:underline;
            }

            .btn{
                width: 22px;
                height: 22px;
                margin: 8px 10px 0 0;
            }
            .play {
                background-position: -267px -205px;
                &:hover{
                    cursor:pointer;
                    background-position:-267px -235px;
                }
            }

            .favor {
                background-position: -300px -205px;
                &:hover{
                    cursor:pointer;
                    background-position:-300px -235px;
                }
            }
        }
    }

    .list{
        .list-item{
            display:flex;
            position:relative;
            align-items:center;
            height:32px;
            
            .rank {
                width: 35px;
                text-align: center;
                margin-left: 10px;
                font-size: 16px;
            }

            .cont{
                display: flex;
                justify-content:space-between;
                width:170px;
                height:17px;
                line-height:17px;
                color: #000;

                .name {
                    flex: 1;
                }

                .operate{
                    display:flex;
                    width:82px;
                    align-items:center;
                    display: none;

                    .btn{
                        width: 17px;
                        height: 17px;
                        margin-left: 8px;
                        cursor:pointer;
                    }

                    .play {
                        background-position: -267px -268px;

                        &:hover{
                            background-position: -267px -288px;
                        }
                    }

                    .addto {
                        position: relative;
                        top: 2px;
                        background-position: 0 -700px;
                        &:hover{
                            background-position: -22px -700px;
                        }
                    }

                    .favor {
                        background-position: -297px -268px;
                        &:hover{
                            background-position: -297px -288px;
                        }
                    }
                }
            }
            &:hover {
                .operate {
                    display: block;
                }
            }
        }
    }
    
    .footer {
        height: 32px;
        display: flex;
        align-items: center;
        margin-right: 32px;
        justify-content: flex-end;

        a {
            color: #000;
            &:hover{
                text-decoration:underline;
            }
        }
    }
`