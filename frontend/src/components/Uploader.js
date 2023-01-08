import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload, Input } from 'antd'

const Uploader = ({ uploadFiles }) => {
  const [fileList, setfileList] = useState([])
  const [groupName, setGroupName] = useState("")
  const [loading, setLoading] = useState(false)

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

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file)
      const newFileList = fileList.slice()
      newFileList.splice(index, 1)
      setfileList(newFileList)
    },
    beforeUpload: (_, list) => {
      setfileList([...fileList, ...list])
    },
    multiple: true,
    fileList,
  }
  return (
    <div>
      <Input required style={{ width: 'auto' }} type="text" placeholder="Enter group name" value={groupName} onChange={handleGroupNameChange}></Input>
      <Upload {...props}>
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