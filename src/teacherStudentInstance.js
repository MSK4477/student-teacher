import { baseUrl } from "./config";
import  axios from "axios";

const teacherStudentInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'Admin': 'Student Teacher Management Dashboard'
      },
    })
    // teacherStudentInstance.interceptors.request.use((config) =>{
    //     alert(" Click Ok To Send request  ")
    //     console.log(config)
    //      return { ...config };
    //    }, function (err) {
    //      console.log(err);
    // })

    // teacherStudentInstance.interceptors.response.use((response) =>{
    //     alert(" Click Ok To Receive Response ")
    //     console.log(response)
    //      return { ...response };
    //    }, function (err) {
    //      console.log(err);
    // })

    export {
        teacherStudentInstance
    }