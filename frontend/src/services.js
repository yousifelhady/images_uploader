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
    // console.log("add images data: ", response.data)
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

export {
    addImages,
    getGroups,
    getGroupImages
}