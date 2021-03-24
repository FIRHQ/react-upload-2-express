import React, { useState, useRef, useEffect } from 'react'
import { UploadHelper } from 'upload2express'

export default ({
  projectId,
  children,
  domain = 'https://uploadhelper.ce04.com',
  userId = 'default',
  uid = null,
  buildUidFunc = () => {
    return new Date().getTime()
  },
  secret = null,
  mainAttribute = null,
  secondAttribute = null,
  showLink = true,
  panelClass = null,
  defaultUploadedUrl = null,
  showDirectLink = true,
  directLinkClass = null,
  showQrCodeLink = true,
  qrCodeLinkClass = null,
  RenderDom = null,
  showUploadedImg = true,
  uploadedImgStyle = {},
  updatedFunc = (url) => {}
}) => {
  const uploadPanel = useRef(null)
  const imagePanel = useRef(null)
  const [uploadedUrl, setUploadUrl] = useState(defaultUploadedUrl)
  const [visibleUploadedLink, setVisibleUploadedLink] = useState(false)
  let uploadHelper = null

  const getUid = () => {
    if (uid) {
      return uid
    } else {
      return buildUidFunc()
    }
  }

  const qrcode = (e) => {
    e.preventDefault()
    uploadHelper = new UploadHelper({
      uploadPanel: uploadPanel.current,
      projectId: projectId,
      qrcodeWidth: 160,
      domain: domain
    })
    uploadHelper.uploadByQrScan({
      userId: userId,
      uid: getUid(),
      secret: secret,
      mainAttribute: mainAttribute,
      secondAttribute: secondAttribute,
      updateFunction: (url) => {
        updatedFunc(url)
        setUploadUrl(url)
        setVisibleUploadedLink(true)
      }
    })
  }

  const click = (e) => {
    e.preventDefault()
    uploadHelper = new UploadHelper({
      uploadPanel: uploadPanel.current,
      projectId: projectId,
      qrcodeWidth: 160,
      domain: domain
    })
    uploadHelper.uploadByBrowser({
      userId: userId,
      uid: getUid(),
      secret: secret,
      updateFunction: (url) => {
        updatedFunc(url)
        setUploadUrl(url)
        setVisibleUploadedLink(true)
      }
    })
  }

  return (
    <div>
      <div ref={uploadPanel}>
        <div className={`${panelClass} upload-panel-buttons`}>
          {showDirectLink ? (
            <a
              href='#'
              className={`${directLinkClass} direct-upload-link`}
              onClick={click}
            >
              上传图片
            </a>
          ) : null}
          {showQrCodeLink ? (
            <a
              href='#'
              className={`${qrCodeLinkClass} qr-upload-link `}
              onClick={qrcode}
            >
              通过手机上传图片
            </a>
          ) : null}
        </div>

        <img
          ref={imagePanel}
          className='img'
          style={{
            ...{
              objectFit: 'contain',
              maxidth: 200,
              maxHeight: 200,
              display: visibleUploadedLink || !showUploadedImg ? '' : 'hidden'
            },
            uploadedImgStyle
          }}
        />
      </div>
      {showLink && visibleUploadedLink ? (
        <a href={uploadedUrl}>{uploadedUrl}</a>
      ) : null}
      {RenderDom && uploadedUrl ? <RenderDom url={uploadedUrl} /> : null}
      {children}
    </div>
  )
}
