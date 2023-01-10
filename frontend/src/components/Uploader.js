import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload, Input, message } from 'antd'

const Uploader = ({ uploadFiles }) => {
  const [fileList, setfileList] = useState([])
  const [groupName, setGroupName] = useState("")
  const [loading, setLoading] = useState(false)
  const allowedFilesFormat = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value)
  }

  const handleUpload = async () => {
    setLoading(true)
    await uploadFiles(fileList, groupName)
    setLoading(false)
    setfileList([])
    setGroupName("")
  }

  const validateFilesFormat = (files) => {
    const validFiles = []
    const nonvalidFiles = []
    files.forEach(file => {
      const isValid = allowedFilesFormat.includes(file.type)
      if (isValid) {
        validFiles.push(file)
      } else {
        nonvalidFiles.push(file)
      }
    })
    return { validFiles, nonvalidFiles }
  }

  const uploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setfileList(newFileList)
    },
    beforeUpload: (file, files) => {
      const { validFiles, nonvalidFiles } = validateFilesFormat(files)
      setfileList([...fileList, ...validFiles])
      if (nonvalidFiles.includes(file)) {
        message.error(`Invalid file format: ${file.name}, Allowed file extensions are [${allowedFilesFormat.map(i => " " + i.substring(i.indexOf('/') + 1))}]`, 5)
      }
      return false
    },
    fileList,
    multiple: true,
    listType: "picture",
    accept: ".png,.jpg,.jpeg,.gif"
  }
  return (
    <div>
      <Input required style={{ width: 'auto' }} type="text" placeholder="Enter group name" value={groupName} onChange={handleGroupNameChange}></Input>
      <Upload {...uploadProps} list>
        <Button icon={<UploadOutlined />}>Select File(s)</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0 || !groupName}
        style={{ marginTop: 16 }}
        loading={loading}
      >
        {loading ? 'Uploading' : 'Start Upload'}
      </Button>
    </div>
  )
}

export default Uploader