import React, { memo } from 'react';

import SJQHotAlbum from './c-cpns/hot-album';
import SJQTopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function SJQAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <SJQHotAlbum/>
      <SJQTopAlbum/>
    </AblumWrapper>
  )
})
