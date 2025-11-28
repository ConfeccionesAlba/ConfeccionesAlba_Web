import type { IUser } from '@/types/auth'

export function decodeToken(token: string): IUser {
  const parts = token.split('.')
  if (parts.length !== 3) {
    throw new Error('Invalid token format')
  }

  // TODO: check the correct properties returned by the parsed token
  const payload = JSON.parse(atob(parts[1] as string))

  return {
    id: payload.sub,
    name: payload.name,
    email: payload.email,
    role: payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
  }
}
