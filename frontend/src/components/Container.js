import React, { useState, useEffect, useCallback } from 'react';
import Uploader from './Uploader';
import GroupsList from './GroupsList';
import ImagesList from './ImagesList';
import { addImages, getGroupImages, getGroups } from '../services';

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
            <div className='parent'>
                <div className='groupsList'>
                    <GroupsList  
                        groups={groups}
                        groupClicked={handleGroupClicked}
                    />
                </div>
                <div className='imagesList'>
                    <ImagesList
                        images={images}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default Container