import axios from "axios";

export interface User {
    id: number
    name: string
    email: string
    phone: string
    bday: string
    city: string
    avatar: string
}

const rootApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const createUser = (user: User) => {
    const formData = new FormData();
    const keys = Object.keys(user);
    keys.forEach(key => formData.append(key, (user as { [key: string]: any })[key]));
    return rootApi.post<User>('/api/users', formData);
}

const getUsers = ({offset, limit}: { offset?: number, limit?: number }) => rootApi.get<{
    items: User[],
    total: number
}>('/api/users', {
    params: {offset, limit}
})

const getUserById = ({id}: { id: string }) => rootApi.get<User>('/api/users/' + id);

export const api = {
    createUser,
    getUsers,
    getUserById
}