import React from 'react';

import SJQDiscover from '@/pages/discover'
import SJQRecommend from '@/pages/discover/c-pages/recommend'
import SJQRanking from '@/pages/discover/c-pages/ranking'
import SJQSongs from '@/pages/discover/c-pages/songs'
import SJQDjradio from '@/pages/discover/c-pages/djradio'
import SJQArtist from '@/pages/discover/c-pages/artist'
import SJQAlbum from '@/pages/discover/c-pages/album'
import SJQPlayer from '@/pages/player'

import SJQMine from '@/pages/mine'
import SJQFriend from '@/pages/friend'
import {Redirect} from 'react-router-dom'


const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to="/discover"/>
        )
    },
    {
        path:"/discover",
        component:SJQDiscover,
        routes:[
            {
                path:"/discover",
                exact:true,
                render: () => (
                    <Redirect to="/discover/recommend"/>
                )
                
            },
            {
                path:"/discover/recommend",
                component:SJQRecommend
            },
            {
                path:"/discover/ranking",
                component:SJQRanking
            },
            {
                path:"/discover/songs",
                component:SJQSongs
            },
            {
                path:"/discover/djradio",
                component:SJQDjradio
            },
            {
                path:"/discover/artist",
                component:SJQArtist
            },
            {
                path:"/discover/album",
                component:SJQAlbum
            },
            {
                path:"/discover/player",
                component: SJQPlayer
            }
        ]
    },
    {
        path:"/mine",
        component:SJQMine
    },
    {
        path:"/friend",
        component:SJQFriend
    },


];

export default routes;