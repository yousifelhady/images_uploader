import React, { useState, useEffect, useCallback } from 'react';
import Uploader from './Uploader';
import GroupsList from './GroupsList';
import ImagesList from './ImagesList';
import { addImages, getGroupImages, getGroups } from '../services';
import { Divider } from 'antd';

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
      <div className='uploader'>
        <Uploader
          uploadFiles={handleUploadFiles}
        />
      </div>
      <Divider />
      <div className='parent'>
        <div className='groupsList'>
          <GroupsList
            groups={groups}
            groupClicked={handleGroupClicked}
          />
        </div>
        <Divider style={{ height: 'auto' }} type='vertical' />
        <div className='imagesList'>
          {images.length ? (
            <ImagesList
            images = { images }
          />
          ) : (<h3>Ooops ... no images in this group.</h3>)
          }

        </div>
      </div>
    </div>

  )
}

export default Container