// File to initalise a global state variable 

import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
    userName: '',
    isLoggedIn: false,
    clickedBuy: false,
    totalPrice: 0
}

export const { useGlobalState } = createGlobalState(initialState)