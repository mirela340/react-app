import axios from 'axios';
const apiUrl = 'http://localhost:5000';
const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const insert = (path, data, callback) => {
    axios.post(`${apiUrl}/${path}`, data, { header })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const list = (path, callback) => {
    axios.get(`${apiUrl}/${path}`, { header })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const read = (path, id, callback) => {
    axios.get(`${apiUrl}/${path}/${id}`, { header })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const update = (path, id, data, callback) => {
    axios.put(`${apiUrl}/${path}/${id}`, data, { header })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

const remove = (path, id, callback) => {
    axios.delete(`${apiUrl}/${path}/${id}`, { header })
        .then(response => callback(response.data))
        .catch(reason => {
            console.log(reason);
            callback(false);
        })
}

export { insert, list, read, update, remove }





