import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

import {
    HotRecommendWrapper
} from './style'

import SJQSongsCover from '@/components/songs-cover'
import SJQThemeHeaderRcm from '@/components/theme-header-recommend'
import { getHotRecommendAction } from '../../store/actionCreators'

export default memo(function SJQHotRecommend() {
    //state
    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend","hotRecommends"]) //state.recommend.hotRecommends
    }),shallowEqual);

    //redux hooks
    const dispatch = useDispatch();

    //其他hooks
    useEffect(() => {
        dispatch(getHotRecommendAction(8));
    }, [dispatch])


    return (
        <HotRecommendWrapper>
            <SJQThemeHeaderRcm title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]}/>
            <div className="recommend-list">
                {
                    hotRecommends.map((item,index)=>{
                        return <SJQSongsCover key={item.id} info={item}></SJQSongsCover>
                    })
                }
            </div>
        </HotRecommendWrapper>
    )
})
