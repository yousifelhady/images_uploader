import React, { useState, useEffect, useCallback } from 'react';
import Uploader from './Uploader';
import GroupsList from './GroupsList';
import ImagesList from './ImagesList';
import { addImages, getGroupImages, getGroups } from '../services';
import { Divider } from 'antd';
import { css } from "@emotion/css"

const Container = () => {
  const [groups, setGoups] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    getGroups().then(data => {
      setGoups(data.groups)
    })
  }, [])

  const handleGroupClicked = useCallback(async (groupId) => {
    const data = await getGroupImages(groupId)
    setImages(data.images)
  }, [])

  const handleUploadFiles = useCallback(async (files, groupName) => {
    const data = await addImages(files, groupName)
    setGoups([...groups, data.group])
    setImages(data.group.images)
  }, [groups])

  return (
    <div>
      <div
        className={css`
          margin: 1rem;
          padding: 2rem 2rem;
          text-align: center;
        `}
      >
        <Uploader
          uploadFiles={handleUploadFiles}
        />
      </div>
      <Divider />
      <div
        className={css`
          display: flex;
        `}
      >
        <div
          className={css`
            padding: 1rem 1rem;
            vertical-align: auto;
            width: 20%;
          `}
        >
          <GroupsList
            groups={groups}
            groupClicked={handleGroupClicked}
          />
        </div>
        <Divider style={{ height: 'auto' }} type='vertical' />
        <div
          className={css`
            padding: 1rem 1rem;
            vertical-align: auto;
            overflow: auto;
            max-height: 585px;
            width: 80%;
          `}
        >
          {images.length ?
            (<ImagesList
              images={images}
            />)
            : (<h3>No Images to show, Please select a group containing images.</h3>)
          }
        </div>
      </div>
    </div>

  )
}

export default Container