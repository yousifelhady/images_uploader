import React, { useState } from 'react';

const Uploader = ({ uploadFiles }) => {
    const [selectedFiles, setSelectedFiles] = useState([])
    const [groupName, setGroupName] = useState("")

    const handleGroupNameChange = (e) => {
        setGroupName(e.target.value)
    }

    const handleFilesChange = (e) => {
        const files = e.target.files
        const filesArr = Array.from(files)
        setSelectedFiles(filesArr)
    }

    const handleUpload = (e) => {
        uploadFiles(selectedFiles, groupName)
        setSelectedFiles([])
        setGroupName("")
        document.getElementById("browser").value = ""
    }

    return (
        <div>
            <input type="text" placeholder="Enter group name" value={groupName} onChange={handleGroupNameChange}></input>
            <input id="browser" type="file" multiple="multiple" onChange={handleFilesChange}></input>
            <div>
                List of Files
                <ul>
                    {
                        selectedFiles.map(file => {
                            return <li key={file.name}>{file.name}</li>
                        })
                    }
                </ul>
            </div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default Uploader