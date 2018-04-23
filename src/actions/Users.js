import { USER } from '../types'

export function toAccess(data) {
    return { type: USER, data: data }
}