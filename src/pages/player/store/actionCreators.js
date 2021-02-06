import { getSongDetail, getLyric } from '@/service/player'
import { parseLyric } from '@/utils/parse-lyric'

import * as actionTypes from './constants'

const changeCurrentSongAction = (currentSong) =>({
    type:actionTypes.CHANGE_CURRENT_SONG,
    currentSong
}) 

const changePlayListAction = (playList) =>({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeCurrentSongIndexAction = (index) =>({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

const changeLyricListAction = (lyricList) =>({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList

})

export const changeSequenceAction = (sequence) =>({
    type: actionTypes.SEQUENCE,
    sequence
})

export const changeCurrentLyricIndexAction = (lyricIndex) =>({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    lyricIndex
})

export const changeCurrentIndexAndSongAction = (tag) =>{
    return (dispatch,getState) =>{
        const playList = getState().getIn(["player","playList"]);
        const sequence = getState().getIn(["player","sequence"]);
        let currentSongIndex = getState().getIn(["player","currentSongIndex"]);
        switch(sequence){
            //随机播放
            case 1 :
                currentSongIndex = Math.floor(Math.random() * playList.length);
                break;
            //顺序和单曲    
            default:
                currentSongIndex += tag;
                if(currentSongIndex >= playList.length) 
                    currentSongIndex = 0;
                if(currentSongIndex < 0) 
                    currentSongIndex = playList.length -1;
        }
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));
        dispatch(getLyricAction(currentSong.id));
    }
}
export const getSongDetailAction = (ids) =>{
    return (dispatch,getState)=>{
        //1.根据id查找playList中是否已经有该歌曲
        const playList = getState().getIn(["player","playList"]);
        const songIndex = playList.findIndex(song => song.id===ids);

        //2.判断是否找到歌曲
        let song = null;
        if(songIndex !== -1){
            //找到了
            dispatch(changeCurrentSongIndexAction(songIndex));
            song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));
            dispatch(getLyricAction(song.id));
        }else{
            //没有找到
            getSongDetail(ids).then(res=>{
                song = res.songs && res.songs[0];
                if(!song) return;

                //1.将最新的歌曲添加进列表中
                const newPlayList = [...playList];
                newPlayList.push(song);

                //2.更新redux的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length-1));
                dispatch(changeCurrentSongAction(song));
                //3.请求歌词
                dispatch(getLyricAction(song.id));

            });
        }
    }
}

export const getLyricAction = (id) =>{
    return dispatch =>{
        getLyric(id).then(res=>{
            // console.log(res.lrc.lyric);
            const lyric = res.lrc.lyric;
            const lyricList = parseLyric(lyric);
            // console.log(lyricList);
            dispatch(changeLyricListAction(lyricList));
        })
    }
}