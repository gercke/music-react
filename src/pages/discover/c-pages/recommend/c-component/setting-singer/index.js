import React, { memo } from 'react'

import {
    SetSingerWrapper
} from './style'

export default memo(function SJQSettingSinger() {
    return (
        <SetSingerWrapper>
            <div className="content">
                <h3 className="singer">
                    <span>入驻歌手</span>
                    <a>查看全部 > </a>
                </h3>
                <ul>
                    <li>
                        <img></img>
                        <div>
                            <sapn>name</sapn>
                            <sapn>catage</sapn>
                        </div>
                    </li>
                </ul>
                <div></div>
            </div>
        </SetSingerWrapper>
    )
})
