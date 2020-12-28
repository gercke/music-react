import styled from 'styled-components'

export const SongsCoverWrapper = styled.div`
    width: 140px;
    margin-top: 20px;
    
    .cover-top{
        position:relative;

        img{
            width: 140px;
            height: 140px;
        }

         .cover{ 
            position:absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background:url(${require("@/assets/img/sprite_cover.png").default});
            background-position: 0 0;
         
            .info{
                display:flex;
                justify-content:space-between;
                align-items:center;
                height:27px;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 0 10px;
                color:rgb(204, 204, 204);
                background:url(${require("@/assets/img/sprite_cover.png").default});
                background-position: 0 -537px;

                .erji {
                    margin-right: 5px;
                    display: inline-block;
                    width: 14px;
                    height: 11px;
                    background-position: 0 -24px;


                }

                .play {
                    display: inline-block;
                    width: 16px;
                    height: 17px;
                    background-position: 0 0;

                    &:hover{
                        cursor:pointer;
                    }
                }
            }
        }
    }
    .cover-bottom {
        font-size: 14px;
        color: #000;
        margin-top: 5px;
        a:hover{
            text-decoration:underline;
        }
    }

    .cover-source {
        color: #666;
        a:hover{
            text-decoration:underline;
        }
    }
`

