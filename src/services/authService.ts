import type {ILoginResponse, ISignInCredentials, IUser} from '@/types/auth.ts'
import api from "@/services/api.ts";
import {API_ENDPOINT_NAMES} from "@/constants/apiNames.ts";
import type IApiResponse from "@/types/apiResponse.ts";

export default {
    async signIn(credentials: ISignInCredentials) {

        const {email} = credentials;

        try {
            const response = await api.post<IApiResponse<ILoginResponse>>(API_ENDPOINT_NAMES.LOGIN, credentials)

            if (response.data.isSuccess) {
                const token = response.data.result.token

                const parts = token.split('.');
                if (parts.length !== 3) {
                    throw new Error('Invalid token format')
                }

                // TODO: check the correct properties returned by the parsed token
                const payload = JSON.parse(atob(parts[1] as string))

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