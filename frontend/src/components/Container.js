import React, { useState, useEffect } from 'react';
import Uploader from './Uploader';
// import UploadFiles from './UploadFiles';
import GroupsList from './GroupsList';
import ImagesList from './ImagesList';
import axios from 'axios';

const addImages = async (images, groupName) => {
    let formData = new FormData()
    images.forEach(image => formData.append("image", image))
    const response = await axios.post('/images', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        params: {
            'group_name': groupName
        }
    })
    console.log("add images data: ", response.data)
    return response.data
}

const getGroups = async () => {
    const response = await axios.get('/groups')
    // console.log("groups data: ", response.data)
    return response.data
}

const getGroupImages = async (groupId) => {
    const response = await axios.get(`/images/groups/${groupId}`)
    // console.log("images data: ", response.data)
    return response.data
}

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

    const handleGroupClicked = (groupId) => {
        getGroupImages(groupId).then(data => {
            setImages(data.images)
        })
    }

    const handleFilesToUpload = (files) => {
        const filesArr = Array.from(files)
        // console.log(filesArr)
        setSelectedFiles(filesArr)
    }

    const handleUploadFiles = (files) => {
        // console.log(files)
        addImages(files, groupName).then(data => {
            setGoups([...groups, data.group])
            setSelectedFiles([])
            setGroupName("")
        })
    }

    const handleGroupName = (groupName) => {
        // console.log(groupName)
        setGroupName(groupName)
    }

    return (
        <div>
            <div className='uploader'>
                <Uploader selectedFiles={selectedFiles} setFilesToUpload={handleFilesToUpload} uploadFiles={handleUploadFiles} setGroupName={handleGroupName}/>
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