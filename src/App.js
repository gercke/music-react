import React, { memo } from 'react';
import {renderRoutes} from 'react-router-config';


import routes from './router';


import SJQAppHeader from '@/components/app-header';
import SJQAppFooter from '@/components/app-footer';
import {HashRouter} from 'react-router-dom'

export default memo(function App() {
    return (
        <HashRouter>
            <SJQAppHeader/>
            {renderRoutes(routes)}
            <SJQAppFooter/>
        </HashRouter>
    )
})
