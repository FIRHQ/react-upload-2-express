# react-upload-2-express

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-upload-2-express.svg)](https://www.npmjs.com/package/react-upload-2-express) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-upload-2-express
```

## 如何使用

主要属性有

| PropsName | Type | 是否必须 | 默认值|描述| 备注 |
|---|---|---|---|--|--|
|projectId| String| 是 | | 项目名称 | |
| userId | String | 否 | default | 上传用户的标识 | 方便后台索引使用
| uid | String | 否 | 当前时间戳 | 上传独立编号， 用来唯一标识在上传用户的某一次上传 | 也可使用 buildUidFunc 属性 在上传前生成 |
| buildUidFunc | Function | 否 | 当前时间戳 | 当点击后， 通过传入的方法生成UID | 此方式用来处理只有点击的刹那， 才能最终确定 uid 值的情况， buildUidFunc 的优先级低于确定的 uid 属性 |
| showLink | Boolean | 否 | true | 是否在上传完毕后显示图片的地址 ||
| defaultUploadedUrl | String | 否 | null | 初始化最终的地址 | 一般用在绑定 form 值上， 如果是前后端分离项目， 可不填写 |
| panelClass | String | 否|  | 指定操作区css 的 class 名称 | 操作区有固定class upload-panel-buttons， 可以在css中制定样式  |
| showDirectLink | Boolean | 否 | true | 是否显示浏览器直接上传链接 | |
| directLinkClass | String | 否 |  | 上传跳转链接标签的 class 名称 |  操作区中的 上传跳转链接 的class， 有固定class direct-upload-link， 可以在css 中指定样式|
| showQrCodeLink | Boolean |否 | true |  是否显示二维码上传链接 |
| qrCodeLinkClass | String | 否 |  |  二维码扫码上传的 class 名称|
| RenderDom | ReactDom | 否 | | 渲染上传完毕后的节点  | props 为 url ， 可以在使用过程中自定义这个显示渲染的节点 |
| showUploadedImg  |Boolean | 否| true |上传完毕后， 是否自动将新的图片添加到 Panel 中|
| uploadedImgStyle | Object | 否 | | 图片的css object | |
| updatedFunc | Function | 否  | 上传完毕后， 执行的方法 | 参数为 url, 即图片地址 |




## Usage

```jsx
import React, { Component } from 'react'

import Upload2Express from 'react-upload-2-express'

const ele = ({url}) => (<p>{url}</p>)

const Example = ()  =>  {
  return <Upload2Express projectId="demo" RenderDom={ele} />
}
```

## License

MIT © [jicheng1014](https://github.com/jicheng1014)
