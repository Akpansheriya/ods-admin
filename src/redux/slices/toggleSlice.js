import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: true,
    box: false,
    accBox: false,
    popup: false,
    msg: {
        emsg: "Loggin SuccessFully",
        smsg: "success"
    }
}

export const actionSlice = createSlice({
    name: 'toggler',
    initialState,
    reducers: {
        toggleOn: (state) => {
            state.toggle = true;
        },
        toggleOff: (state) => {
            state.toggle = false;
        },
        open: (state) => {
            state.box = true;
        },
        close: (state) => {
            state.box = false
        },
        opendlt: (state) => {
            state.accBox = true;
        },
        closedlt: (state) => {
            state.accBox = false
        },
        popen: (state) => {
            state.popup = true
        },
        pclose: (state) => {
            state.popup = false
        },
        pmsg: (state, action) => {
            state.msg = action.payload
        }
    }
})

export const { toggleOn, toggleOff, open, close, opendlt, closedlt, popen, pclose, pmsg } = actionSlice.actions;

export default actionSlice.reducer;