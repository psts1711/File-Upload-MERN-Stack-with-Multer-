import axios from 'axios'

const baseUrl = 'http://localhost:4000/api/';



   export const singleFileUpload = async(data, options) => {
        try {
            await axios.post(baseUrl + 'singlefile', data, options)
        } catch (error) {
            console.log(error.message);
        }
    }


    export const multipleFileUpload = async(data, options) => {
        try {
            await axios.post(baseUrl + 'multiplefile', data, options)
        } catch (error) {
            console.log(error.message);
        }
    }

    export const getSingleFile = async() => {
        try {
          const {data} = await axios.get(baseUrl + 'getsinglefiles');
          return data;
        } catch (error) {
            console.log(error.message);
        }
    }

    export const getMultipleFile = async() => {
        try {
          const {data} = await axios.get(baseUrl + 'getmultiplefiles');
          return data;
        } catch (error) {
            console.log(error.message);
        }
    }
    


