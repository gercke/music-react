import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from "@/utils/format-utils";
export default memo(function SJQSongsCover(props) {
    const { info } = props;

    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={getSizeImage(info.picUrl, 140)} alt="" />
                <div className="cover">
                    <div className="info">
                        <span>
                            <i className="erji sprite_icon"></i>
                            {getCount(info.playCount)}
                        </span>
                        <i className="play sprite_icon"></i>
                    </div>
                </div>
            </div>
            <div className="cover-bottom">
                <a>{info.name}</a>
            </div>
            <div className="cover-source">
                by
                <a> {info.copywriter || info.creator.nickname}</a>
            </div>
        </SongsCoverWrapper>
    )
})
