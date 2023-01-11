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
  const [selectedGroup, setSelectedGroup] = useState("")

  useEffect(() => {
    getGroups().then(data => {
      setGoups(data.groups)
    })
  }, [])

  const handleGroupClicked = useCallback(async (groupId, groupName) => {
    const data = await getGroupImages(groupId)
    setImages(data.images)
    setSelectedGroup(groupName)
  }, [])

  const handleUploadFiles = useCallback(async (files, groupName) => {
    const data = await addImages(files, groupName)
    setGoups([...groups, data.group])
    setImages(data.group.images)
    setSelectedGroup(groupName)
  }, [groups])

  return (
    <div className={css`
        min-height: 84vh;
      `}
    >
      <div
        className={css`
          margin: 1rem;
          padding: 1rem 1rem;
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
            overflow: auto;
            max-height: 610px;
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
            max-height: 610px;
            width: 80%;
          `}
        >
          <div
            className={css`
              margin: 0rem 0rem 1rem 0rem;
              padding: 0rem 0rem 1rem 0rem;
              text-align: left;
            `}
          >
            {selectedGroup && <h2>Group: {selectedGroup}</h2>}
          </div>
          {selectedGroup ?
            images.length ?
              (<ImagesList images={images} />)
              : (<h3>Ooops... No images found in this group!</h3>)
            : (null)
          }
        </div>
      </div>
    </div>

  )
}

export default Container