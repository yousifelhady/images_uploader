import axios from 'axios'

export const addImages = async (images, groupName) => {
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
    return response.data
}

export const getGroups = async () => {
    const response = await axios.get('/groups')
    return response.data
}

export const getGroupImages = async (groupId) => {
    const response = await axios.get(`/images/groups/${groupId}`)
    return response.data
}
