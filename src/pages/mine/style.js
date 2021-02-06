import styled from 'styled-components'

export const MineWrapper = styled.div`
    .content{
        background-color: #fff;
        height:700px;
        min-width:807px; 

        .pic{
            position:relative;
            width:807px;
            height:372px;
            margin: 0 auto;
            background: url(${require("@/assets/img/mine_sprite.png").default}) 0 104px no-repeat;

            .login{
                position:absolute;
                width:167px;
                height:45px;
                left:482px;
                top:306px;
                text-indent:-9999px;

            }
            a:hover{
                    background: url(${require("@/assets/img/mine_sprite.png").default}) 0 -278px no-repeat;
            }
        }
    }
`