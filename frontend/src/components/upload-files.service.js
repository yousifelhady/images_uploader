import axios from "axios";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("image", file);

    return axios.post("/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: {
        "group_name": "groupName"
      },
      onUploadProgress,
    });
  }

  getFiles(groupId) {
    return axios.get(`/images/groups/${groupId}`);
  }
}

export default new UploadFilesService();