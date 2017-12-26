// 学习文档 https://reacttraining.com/react-router/web/example/basic
import { render } from 'react-dom'
import React from 'react'
import BasicExample from './modules/1.BasicExample.js'
import ParamsExample from './modules/2.ParamsExample.js'
import CustomLinkExample from './modules/4.CustomLinkExample.js'
// import PreventingTransitionsExample from './modules/5.PreventingTransitionsExample.js'
import NoMatchExample from './modules/6.NoMatchExample.js'
import RecursiveExample from './modules/7.RecursiveExample.js'
import SidebarExample from './modules/8.SidebarExample.js'
// import AnimationExample from './modules/9.AnimationExample.js'
import AmbiguousExample from './modules/10.AmbiguousExample.js'
// import ModalGallery from './modules/11.ModalGallery.js'
import StaticRouterExample from './modules/12.StaticRouterExample.js'
// import AuthExample from './modules/3.AuthExample.js'

render(
	// <BasicExample />, 					// 1. 基本
	// <ParamsExample />, 					// 2. url参数
	// <AuthExample/>,		 				// 3. 重定向 x
	// <CustomLinkExample />, 				// 4. 自定义链接
	// <PreventingTransitionsExample />, 	// 5. 防止转换
	// <NoMatchExample />, 					// 6. 不匹配
	// <RecursiveExample />, 				// 7. 递归路由
	// <SidebarExample />, 					// 8. 边栏
	// <AnimationExample />, 				// 9. 动画转换 x
	// <AmbiguousExample />, 				// 10. 不明确的匹配
	// <ModalGallery />, 					// 11. 模块图库 x
	<StaticRouterExample />, 				// 12. staticRouter上下文 x
 	document.getElementById('app')
)

