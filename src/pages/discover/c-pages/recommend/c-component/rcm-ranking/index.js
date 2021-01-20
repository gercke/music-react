import React, { memo, useEffect } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

import { RankingWrapper } from './style'

import SJQTopRanking from '@/components/top-ranking'
import SJQThemeHeaderRcm from '@/components/theme-header-recommend'
import { getTopListAction } from '../../store/actionCreators'


export default memo(function SJQRcmRanking() {
    const {upRanking, newRanking, originRanking } = useSelector(state => ({
        upRanking: state.getIn(["recommend","upRanking"]),
        newRanking: state.getIn(["recommend","newRanking"]),
        originRanking: state.getIn(["recommend","originRanking"]),
    }),shallowEqual);

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    },[dispatch])

    return (
        <RankingWrapper>
            <SJQThemeHeaderRcm title="榜单"/> 
            <div className="tops">
                <SJQTopRanking info={upRanking}/>
                <SJQTopRanking info={newRanking}/>
                <SJQTopRanking info={originRanking}/>
            </div>
        </RankingWrapper>
    )
})
