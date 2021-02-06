import React, { memo,useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getTops } from "./store/actionCreators"

import SJQTopRanking from "./c-cpns/top-ranking";
import SJQRankingHeader from './c-cpns/ranking-header';
import SJQRankingList from './c-cpns/ranking-list';
import {
    RankingWrapper,
    RankingLeft,
    RankingRight,
} from "./style";

export default memo(function SJQRanking() {
    // redux
    const dispatch = useDispatch();

    // hooks
    useEffect(() => {
        dispatch(getTops());
    }, [dispatch])

    return (
      <RankingWrapper className="wrap-v2">
        <RankingLeft>
          <SJQTopRanking/>
        </RankingLeft>
        <RankingRight>
          <SJQRankingHeader/>
          <SJQRankingList/>
        </RankingRight>
      </RankingWrapper>
    )
})
