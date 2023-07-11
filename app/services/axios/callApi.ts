import {axiosInstance} from '../axios/axiosInstance'
import ValidationError from '@/app/exceptions/validationError';
import { toast } from 'react-toastify';


const callApi = () => {
    axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        },
        err => Promise.reject(err) 
    )

    axiosInstance.interceptors.response.use(
        res => {
            return res;
        },
        err => {
            toast.error(err?.response?.data?.error)
            const res = err?.response
            if(res) {
                if(res.status === 422) {
                    throw new ValidationError(res.data.errors)
                }
            }

            Promise.reject(err) 
        }
    )

    return axiosInstance;
}


export default callApi;