import type {ILoginResponse, ISignInCredentials, IUser} from '@/types/auth.ts'
import api from "@/services/api.ts";
import {API_ENDPOINT_NAMES} from "@/constants/apiNames.ts";
import type IApiResponse from "@/types/apiResponse.ts";
import {decodeToken} from "@/utils/tokenUtils.ts";

export default {
    async signIn(credentials: ISignInCredentials) {
        try {
            const response = await api.post<IApiResponse<ILoginResponse>>(API_ENDPOINT_NAMES.LOGIN, credentials)

            if (response.data.isSuccess) {
                const token = response.data.result.token

                const user = decodeToken(token)

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