import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../api/api";

interface UserState {
    currentUser: User,
    users: User[]
}

const initialState: UserState = {
    currentUser: {} as User,
    users: []
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<User>) {
            state.currentUser = action.payload
        },
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
        }
    }
});

export const userAC = userSlice.actions;

