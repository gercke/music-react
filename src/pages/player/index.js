import React, { memo } from 'react'

import { 
    PlayerWrapper,
    PlayerLeft,
    PlayerRight 
} from './style'

export default memo(function SJQPlayer() {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <h2>SJQPlayerInfo</h2>
                    <h2>SJQSongContent</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>SJQSimiPlaylist</h2>
                    <h2>SJQSimiSong</h2>
                    <h2>SJQDownLoad</h2>
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
