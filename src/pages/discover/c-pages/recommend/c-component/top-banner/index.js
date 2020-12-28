import React, { memo, useEffect ,useRef ,useCallback, useState} from 'react'

import {shallowEqual,useDispatch, useSelector} from 'react-redux'
import { getTopBannerAction } from "../../store/actionCreators";

import { Carousel } from 'antd';
import { 
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style'


export default memo(function SJQTopBanner() {
       
        //state
        const [currentIndex, setCurrentIndex] = useState(0);

        //组件和redux关联：：获取数据和进行dispatch操作
        const  {topBanners} = useSelector(state => ({
            // topBanners: state.recommend.topBanners
            // topBanners: state.recommend.get("topBanners")
            // topBanners: state.get("recommend").get("topBanners")
            topBanners: state.getIn(["recommend","topBanners"])
        }),shallowEqual);
    
        const dispatch = useDispatch();
    
        //其他hook
        const bannerRef = useRef();
        useEffect(()=>{//发送网络请求
            dispatch(getTopBannerAction());
        },[dispatch])
        const bannerChange = useCallback((from,to)=>{
            setTimeout(() =>{
                setCurrentIndex(to);
            },0)
        },[]);

        //其他
        // const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl;
        //"http://p1.music.126.net/jjaOa116MQXenxn_OGCtSw==/109951165567993139.jpg?imageView&blur=40x20"
        const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

    return (
        <div>
            <BannerWrapper bgImage={bgImage}>
                <div className="banner wrap-v2">
                    <BannerLeft>
                        <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={bannerChange}>
                            {
                                topBanners.map((item,index)=>{
                                    return(
                                        <div className="banner-item" key={item.imageUrl}>
                                            <img className="image" src={item.imageUrl}></img>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </BannerLeft>
                    <BannerRight>
                        <div className="download-pic">
                            <a href="https://music.163.com/#/download" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </BannerRight>
                    <BannerControl>
                        <button className="btn left" onClick={e =>{bannerRef.current.prev()}}></button>
                        <button className="btn right" onClick={e =>{bannerRef.current.next()}}></button>
                    </BannerControl>
                </div>
            </BannerWrapper>
        </div>
    )
})