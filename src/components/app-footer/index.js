
import React, { memo } from 'react'

import {footerImages} from '@/common/local-data'

import {
    FooterWrapper,
    FooterLeft,
    FooterRight
} from './style'

export default memo(function SJQAppFooter() {
    return (
        <FooterWrapper>
            <div className="wrap-v2 content">
                <FooterLeft>
                    <div className="detail">
                        <p className="d-link">
                            <a href="https://st.music.163.com/official-terms/service">服务条款</a>
                            <span className="line">|</span>
                            <a href="https://st.music.163.com/official-terms/privacy">隐私政策</a>
                            <span className="line">|</span>
                            <a href="https://st.music.163.com/official-terms/children">儿童隐私政策</a>
                            <span className="line">|</span>
                            <a href="https://music.163.com/st/staticdeal/complaints.html">版权投诉指引</a>
                            <span className="line">|</span>
                            <a href="/#">意见反馈</a>
                            <span className="line">|</span>
                        </p>
                    </div>
                    <div className="copyright">
                        <span>网易公司版权所有©1997-2020</span>
                        <span>杭州乐读科技有限公司运营：</span>
                        <span>
                            <a href="#">浙网文[2018]3506-263号</a>
                        </span>
                    </div>
                    <div className="report">
                        <span>违法和不良信息举报电话：</span>
                        <span>0571-89853516</span>
                        <span>举报邮箱：</span>
                        <span><a href="#">ncm5990@163.com</a></span>
                    </div>
                    <div className="info">
                        <span>粤B2-20090191-18</span>
                        <span><a href="#">工业和信息化部备案管理系统网站</a></span>
                        <span><a>浙公网安备 33010902002564号</a></span>
                    </div>
                </FooterLeft>
                <FooterRight className="right">
                    {
                        footerImages.map((item,index)=>{
                            return (
                                <li className="item" key={item.link}>
                                    <a className="link" href={item.link} target="_blank" rel="noopener noreferrer"></a>
                                    <span className="title">{item.title}</span>
                                </li>
                            )
                        })
                    }
                </FooterRight>
            </div>
        </FooterWrapper>
    )
})
