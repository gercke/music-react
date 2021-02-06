import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getHotAlbumsAction } from '../../store/actionCreators';

import SJQAlbumCover from '@/components/album-cover';
import SJQThemHeaderNormal from '@/components/theme-header-normal';
import {
  HotAlbumWrapper
} from './style';

export default memo(function SJQHotAlbum() {

  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <SJQThemHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbums.slice(0, 10).map((item, index) => {
            return <SJQAlbumCover size={"130"} 
                                 width={"153"} 
                                 bgp={"-845"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
    </HotAlbumWrapper>
  )
});
