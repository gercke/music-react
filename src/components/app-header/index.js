import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style'
import {headerLinks} from '@/common/local-data'

export default memo(function SJQAppHeader() {
    //业务代码
    const showSelectItem = (item,index) =>{
        if(index<3){
            return(
                <NavLink to={item.link}  exact>
                    {item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
            
        }else{
            return(
                <a href={item.link}>{item.title}</a>
            )
        }
    }

    //返回的jsx代码
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">网易云音乐</a>
                    <div className="select-list">
                        {/*通过数组进行遍历拿到数据 */}
                        {
                            headerLinks.map((item,index)=>{
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item,index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>Right</HeaderRight>
            </div>
            <div className="divline"></div>
        </HeaderWrapper>
    )
})
