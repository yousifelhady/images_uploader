import React, { useState, useEffect, useCallback } from 'react';
import Uploader from './Uploader';
import GroupsList from './GroupsList';
import ImagesList from './ImagesList';
import { addImages, getGroupImages, getGroups } from '../services';

const Container = () => {
    const [groups, setGoups] = useState([])
    const [images, setImages] = useState([])
    const [selectedFiles, setSelectedFiles] = useState([])
    const [groupName, setGroupName] = useState("")
    
    useEffect(() => {
        getGroups().then(data => {
            setGoups(data.groups)
        })
    }, [])

    const handleGroupClicked = useCallback(async (groupId) => {
        const data = await getGroupImages(groupId)
        setImages(data.images)
    }, [])

    const handleFilesToUpload = useCallback((files) => {
        const filesArr = Array.from(files)
        // console.log(filesArr)
        setSelectedFiles(filesArr)
    }, [])

    const handleUploadFiles = useCallback(async () => {
        // console.log(files)
        const data = await addImages(selectedFiles, groupName)
        setGoups([...groups, data.group])
        setSelectedFiles([])
        setGroupName("")
    }, [groupName, groups, selectedFiles])

    const handleGroupName = useCallback(() => {
        // console.log(groupName)
        setGroupName(groupName)
    }, [groupName])

    return (
        <div>
            <div className='uploader'>
                <Uploader selectedFiles={selectedFiles} 
                    setFilesToUpload={handleFilesToUpload} 
                    uploadFiles={handleUploadFiles} 
                    setGroupName={handleGroupName} 
                    groupName={groupName}
                />
            </div>
            <div className='parent'>
                <div className='groupsList'>
                    <GroupsList  groups={groups} groupClicked={handleGroupClicked}/>
                </div>
                <div className='imagesList'>
                    <ImagesList  images={images}/>
                </div>
            </div>
        </div>
        
    )
}

export default Container