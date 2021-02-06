import React, { useState, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from '../../store/constants';
import { getSongList } from "../../store/actionCreators";

import SJQSongsCover from '@/components/songs-cover';
import SJQPagination from '@/components/pagination';
import {
  SongListWrapper
} from "./style";

export default memo(function SJQSongsList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"])
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch();

  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getSongList(page));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return <SJQSongsCover key={item.id} info={item} right="30px"></SJQSongsCover>
          })
        }
      </div>
      <SJQPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={PER_PAGE_NUMBER}
                    onPageChange={onPageChange}/>
    </SongListWrapper>
  )
})
