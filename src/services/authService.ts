import api from '@/services/api'
import { API_ENDPOINT_NAMES } from '@/constants/apiNames'
import type { ILoginResponse, ISignInCredentials } from '@/types/auth'
import type IApiResponse from '@/types/apiResponse'
import { decodeToken } from '@/utils/tokenUtils'

export default {
  async signIn(credentials: ISignInCredentials) {
    try {
      const response = await api.post<IApiResponse<ILoginResponse>>(
        API_ENDPOINT_NAMES.LOGIN,
        credentials,
      )

      if (response.data.isSuccess) {
        const token = response.data.result.token

        const user = decodeToken(token)

        return {
          token,
          user,
        }
      } else {
        throw new Error(response.data.errorMessages.join('\r\n'))
      }
    } catch (error) {
      console.error('Error in login', error)
      throw error
    }
  },
}
