import axios from 'axios'

const pathAPI = process.env.REACT_APP_PATH_API || 'https://sosanhnha.com/api'

export default axios.create({
    baseURL: pathAPI
});


