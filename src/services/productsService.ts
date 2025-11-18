import api from '@/services/api'
import type IApiResponse from "@/types/apiResponse";
import {API_ENDPOINT_NAMES} from "@/constants/apiNames";
import type {IProduct, IProductCreate, IProductUpdate} from "@/types/productsResponse.ts";

export default {
    async getProducts() {
        try {
            const response = await api.get<IApiResponse<IProduct[]>>(API_ENDPOINT_NAMES.PRODUCTS)

            if (response.data.isSuccess) {
                return response.data.result
            } else {
                throw new Error(response.data.errorMessages.join('\r\n'))
            }
        } catch (err) {
            console.error('Products fetch failed', err)
            throw err
        }
    },

    async getProductById(id: number) {
        try {
            const endpoint = `${API_ENDPOINT_NAMES.PRODUCTS}/${id}`
            const response = await api.get<IApiResponse<IProduct>>(endpoint)

            if (response.data.isSuccess) {
                return response.data.result
            } else {
                throw new Error(response.data.errorMessages.join('\r\n'))
            }
        } catch (err) {
            console.error('Products fetch failed', err)
            throw err
        }
    },

    // TODO: get file and upload as multipart/form-data
    async createProduct(newProduct: IProductCreate) {
        try {
            const response = await api.post<IApiResponse<IProduct>>(API_ENDPOINT_NAMES.PRODUCTS,
                newProduct,
                {headers: {'Content-Type': 'multipart/form-data'}})

            if (response.data.isSuccess) {
                return response.data.result
            } else {
                throw new Error(response.data.errorMessages.join('\r\n'))
            }
        } catch (err) {
            console.error('Product creation failed', err)
            throw err
        }
    },


    // TODO: get file and upload as multipart/form-data
    async updateProductById(id: number, productUpdate: IProductUpdate) {
        try {
            const endpoint = `${API_ENDPOINT_NAMES.PRODUCTS}/${id}`
            const response = await api.put<IApiResponse<IProduct>>(endpoint,
                productUpdate,
                {headers: {'Content-Type': 'multipart/form-data'}})

            if (response.data.isSuccess) {
                return
            } else {
                throw new Error(response.data.errorMessages.join('\r\n'))
            }
        } catch (err) {
            console.error('Product update failed', err)
            throw err
        }
    },
}