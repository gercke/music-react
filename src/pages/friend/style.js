import styled from 'styled-components';

export const FriendWrapper = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;

    .pic {
      position: relative;
      width: 807px;
      height: 484px;
      margin: 0 auto;
      background: url(${require("@/assets/img/friend_sprite.jpg").default}) 0 104px no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 535px;
        top: 364px;
        text-indent: -9999px;
      }
      a:hover{
        background: url(${require("@/assets/img/friend_sprite.jpg").default}) 0 -430px no-repeat;
      }
    }
  }
`