import React, { memo} from 'react'

import SJQTopBanner from './c-component/top-banner'
import SJQHotRecommend from './c-component/hot-recommend'
import SJQNewAlbum from './c-component/new-album'
import SJQRcmRanking from './c-component/rcm-ranking'

import { 
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
 } from './style'

function SJQRecommend(props) {
    return (
        <RecommendWrapper>
            <SJQTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <SJQHotRecommend></SJQHotRecommend>
                    <SJQNewAlbum></SJQNewAlbum>
                    <SJQRcmRanking></SJQRcmRanking>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

export default memo(SJQRecommend);
// function SJQRecommend(props) {
//     //在这里发起网络请求
//     const {getBanners, topBanners} = props;

//     useEffect(() => {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div>
//             <h2>recommend:{topBanners.length}</h2>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         topBanners: state.recommend.topBanners

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getBanners: ()=> {
//             dispatch(getTopBannerAction())
//         }
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(memo(SJQRecommend));