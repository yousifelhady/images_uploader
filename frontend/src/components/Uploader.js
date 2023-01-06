import React from 'react';

const Uploader = (props) => {
    const handleGroupNameChange = (e) => {
        props.setGroupName(e.target.value)
    }

    const handleFilesChange = (e) => {
        props.setFilesToUpload(e.target.files)
    }

    const handleUpload = (e) => {
        props.uploadFiles(props.selectedFiles)
        // document.getElementById("grpName").value = ""
        // document.getElementById("browser").value = ""
    }

    return (
        <div>
            <input id="grpName" type="text" placeholder="Enter group name" onChange={handleGroupNameChange}></input>
            <input id="browser" type="file" multiple="multiple" onChange={handleFilesChange}></input>
            <div>
                List of Files
                <ul>
                    {
                        props.selectedFiles.map(f => {
                            return <li key={f.name}>{f.name}</li>
                        })
                    }
                </ul>
            </div>
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default Uploader