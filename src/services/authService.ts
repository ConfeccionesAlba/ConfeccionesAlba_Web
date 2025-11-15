import type {ISignInCredentials, IUser} from '@/types/auth.ts'
import api from "@/services/api.ts";
import {API_ENDPOINT_NAMES} from "@/constants/apiNames.ts";

export default {
    async signIn(credentials: ISignInCredentials) {

        const {email} = credentials;

        try {
            const response = await api.post(API_ENDPOINT_NAMES.LOGIN, credentials)

            if (response.data.isSuccess) {
                const {token} = response.data.result
                const payload = JSON.parse(atob(token.split('.')[1]))

                const user: IUser = {
                    id: payload.id,
                    name: payload.name,
                    email: email,
                    role: payload.role
                }

                return {
                    token,
                    user
                }

            } else {
                throw new Error('Login failed')
            }

        } catch (error) {
            console.error('Error in login', error)
            throw error
        }
    }
}