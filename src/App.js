import React, { memo } from 'react';
import {renderRoutes} from 'react-router-config';
import { Provider } from 'react-redux';


import routes from './router';
import store from './store'


import SJQAppHeader from '@/components/app-header';
import SJQAppFooter from '@/components/app-footer';
import {HashRouter} from 'react-router-dom'


export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <SJQAppHeader/>
                {renderRoutes(routes)}
                <SJQAppFooter/>
            </HashRouter>
        </Provider>
    )
})
