import { $authHost, $host } from "./index";

export const registration = async (email, password) => {
    const responze = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
    return responze
}
export const login = async (email, password) => {
    const responze = await $host.post('api/user/login', {email, password})
    return responze
}
export const check = async () => {
    const responze = await $host.post('api/auth/registration')
    return responze
}