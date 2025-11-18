import type {IUser} from "@/types/auth.ts";

export function decodeToken(token: string): IUser {
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('Invalid token format')
    }

    // TODO: check the correct properties returned by the parsed token
    const payload = JSON.parse(atob(parts[1] as string))

    return {
        id: payload.id,
        name: payload.name,
        email: payload.email,
        role: payload.role
    }
}