import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'

import {getSizeImage ,formatDate, getPlaySong} from '@/utils/format-utils'

import { NavLink } from 'react-router-dom'
import { Slider } from 'antd';
import {
    PlaybarWrapper,
    Control,
    PlayInfo,
    Operator
} from './style'

import { 
    changeSequenceAction, 
    getSongDetailAction,
    changeCurrentIndexAndSongAction
} from '../store/actionCreators';

export default memo(function SJQPlayerBar() {
    //props
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isChange, setIsChange] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    //redux hook
    const {currentSong, sequence} = useSelector(state=>({
        currentSong: state.getIn(["player","currentSong"]),
        sequence: state.getIn(["player","sequence"])
    }),shallowEqual);
    const dispatch = useDispatch();

    //other hook
    const audioRef = useRef();
    useEffect(() => {
        dispatch(getSongDetailAction(411214279));
    },[dispatch]);

    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        audioRef.current.play().then(res=>{
            setIsPlaying(true);
        }).catch(err=>{
            setIsPlaying(false);
        })
    }, [currentSong]);

    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    const singerName = (currentSong.ar && currentSong.ar[0].name)||"未知歌手";
    const duration = currentSong.dt || 0;
    const showDuration = formatDate(duration,"mm:ss");
    const showCurrentTime = formatDate(currentTime,"mm:ss");
    

    const playMusic = useCallback(() =>{
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    },[isPlaying]);
    
    const timeUpdate =(e) =>{
        // console.log(e.target.currentTime);
        if(!isChange){
            setCurrentTime(e.target.currentTime *1000);
            setProgress(currentTime / duration * 100);
        }
    }

    const changeSequence = () =>{
        let currentSequence = sequence +1;
        if(currentSequence > 2){
            currentSequence =0;
        }
        dispatch(changeSequenceAction(currentSequence));
    }

    const changeMusic = (tag) =>{
        dispatch(changeCurrentIndexAndSongAction(tag));
    }

    const handleMusicEnded = () =>{
        if(sequence === 2 || playList.length === 1){//单曲
            audioRef.current.currentTime =0;
            audioRef.current.play();
        }else{
            dispatch(changeCurrentIndexAndSongAction(1));
        }
    }
    const sliderChange = useCallback((value)=>{
        setIsChange(true);
        const currentTime = value /100 * duration / 1000;
        setCurrentTime(currentTime *1000);
        setProgress(value);
    },[duration]);

    const sliderAfterChange = useCallback((value)=>{
        const currentTime = value /100 * duration / 1000;
        audioRef.current.currentTime =currentTime;
        setCurrentTime(currentTime *1000);
        setIsChange(false);

        if(!isPlaying){
            playMusic();
        }
    },[duration,isPlaying,playMusic]);

    return (
        <PlaybarWrapper>
            <div className="content wrap-v2">
                <Control isPlaying={isPlaying}>
                    <button className="prev" onClick={e=>changeMusic(-1)}></button>
                    <button className="play" onClick={e=>playMusic()}></button>
                    <button className="next" onClick={e=>changeMusic(1)}></button>
                </Control>
                <PlayInfo>
                    <div className="image">
                        <NavLink to="/discover/player">
                            <img src={getSizeImage(picUrl,34)} alt="" />
                        </NavLink>
                    </div>
                    <div className="info">
                        <div className="song">
                            <a className="song-name">{currentSong.name}</a>
                            <a className="singer-name">{singerName}</a>
                        </div>
                        <div className="progress">
                            <Slider defaultValue={30} 
                                    value={progress}
                                    onChange={sliderChange}
                                    onAfterChange={sliderAfterChange}/>
                            <div className="time">
                                <span className="now-time">{showCurrentTime}</span>
                                <span className="divider">/</span>
                                <span className="duration">{showDuration}</span>
                            </div>
                        </div>
                    </div>
                </PlayInfo>
                <Operator sequence={sequence}>
                    <div className="left">
                        <button className="btn favor"></button>
                        <button className="btn share"></button>
                    </div>
                    <div className="right">
                        <button className="btn volume"></button>
                        <button className="btn loop" onClick={e=>changeSequence()}></button>
                        <button className="btn playlist"></button>
                    </div>
                </Operator>
            </div>
            <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleMusicEnded}/>
        </PlaybarWrapper>
    )
})
