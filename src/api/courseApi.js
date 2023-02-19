import axios from 'axios';

// This will hold all of our possible api requests we need
const baseURL = 'http://localhost:5239/api'

export async function getCourses() {
    return axios.get(baseURL + '/course')
}

export async function getCoursesById(course_id) {
    return axios.get(baseURL + `/course/${course_id}`)
}

export async function updateHole(teebox_id, hole) {

    console.log(hole)

    return await axios.put(baseURL + `/course/${teebox_id}/update/hole`, hole)
}



