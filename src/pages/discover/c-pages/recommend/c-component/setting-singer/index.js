import React, { memo ,useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import {
    SetSingerWrapper
} from './style'

import {
    getSizeImage
} from "@/utils/format-utils";

import { getSetSingerAction } from '../../store/actionCreators'

export default memo(function SJQSettingSinger() {
    
    const {setSinger} = useSelector((state) => ({
      setSinger: state.getIn(["recommend", "setSinger"])
    }), shallowEqual);
    const dispatch = useDispatch();
    // hooks
    useEffect(() => {
      dispatch(getSetSingerAction());
    }, [dispatch])

    return (
        <SetSingerWrapper>
            <h3 className="singer">
                <span>入驻歌手</span>
                <a>查看全部 > </a>
            </h3>
            <div className="singer-list">
                {
                    setSinger.map((item, index) => {
                        return (
                            <a href="/singer" key={item.id} className="item">
                                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                                <div className="info">
                                    <div className="title">{item.alias.join("") || item.name}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            </a>
                        )
                })
                }
            </div>
            <div className="apply-for">
                    <a href="/abc">申请成为网易音乐人</a>
                </div>
        
        </SetSingerWrapper>
    )
})
