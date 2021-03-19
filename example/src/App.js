import React from 'react'

import  SimpleComponent  from 'react-upload-2-express'

const RenderDom = ({url}) => (
  <>
  <input type='hidden' value={url} name='user[profile_image_url]' />
  </>
)

export default ({}) => {
  return(
    <>
      {/* <UploadElement projectId='project_avatar' domain={domain} showLink={false} RenderDom={RenderDom} /> */}

      <SimpleComponent projectId='user_avatar'

      showLink={true}
      RenderDom={RenderDom}
       />
    </>
  )
}
