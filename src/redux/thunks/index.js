import * as actions from "../actions";
import {updatePlants} from "../actions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2022";


function handleError(e, dispatch) {
    if (e.response === undefined)
        dispatch(showMessage({message: "Server connection refused", isError: true}))
    else {
        if (e.response.status === 400)
            dispatch(showMessage({message: `User input error: ${e.response.data}`, isError: true}));
        if (e.response.status === 404)
            dispatch(showMessage({message: `Not found: ${e.response.data}`, isError: true}));
        if (e.response.status === 500)
            dispatch(showMessage({message: `Shit happens...\n${e.response.data}`, isError: true}));
    }
}

export function showMessage(message) {
    return function (dispatch) {
        dispatch(actions.showMessage(message));
        setTimeout(() => dispatch(actions.hideMessage()), 3000)
    };
}

export function signUpUser(user) {
    return function (dispatch) {
        axios
            .post('/auth/register', {
                username: user.username,
                password: user.password,
            })
            .then(response => {
                dispatch(showMessage({message: response.data, isError: false}))
            })
            .catch(e => handleError(e, dispatch));

    }
}

export function signInUser(user) {
    return function (dispatch) {
        axios
            .post('/auth/login', {
                username: user.username,
                password: user.password,
            })
            .then(response => {
                if (response.status === 200) {
                    dispatch(actions.signIn(user))
                }
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function logout() {
    return function (dispatch) {
        dispatch(actions.logout());
    }
}

export function getUserPlants() {
    return function (dispatch, getState) {
        axios
            .get(`/plant`, {params: {username: getState().auth.currentUser.username}}
            )
            .then(response => {
                dispatch(updatePlants(response.data))
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function addPlant(plant) {
    return function (dispatch, getState) {
        axios
            .post('/plant', {
                    name: plant.name,
                    plantId: 0,
                    groundHumidityBorder: 0,
                    brightnessBorder: 0,
                    dayLong: 0,
                    spectre: {
                        id: 0,
                        rvalue: 0,
                        bvalue: 0,
                        gvalue: 0
                    },
                    ownerName: getState().auth.currentUser.username
                }
            )
            .then(response => {
                dispatch(actions.addPlant(response.data));
                dispatch(showMessage({message: "Plant successfully added", isError: false}));
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function updatePlant(plant) {
    return function (dispatch) {
        axios
            .put('/plant', {
                    id: plant.id,
                    name: plant.name,
                }
            )
            .then(() => {
                dispatch(showMessage({message: "Plant's name successfully updated", isError: false}));
                dispatch(getUserPlants());
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function updatePlantSettings(settings) {
    return function (dispatch) {
        axios
            .put('/plant/settings', {
                    plantId: settings.id,
                    groundHumidityBorder: settings.groundHumidityBorder,
                    brightnessBorder: settings.brightnessBorder,
                    dayLong: settings.dayLong,
                    spectre: {
                        id: 0,
                        rvalue: settings.rvalue,
                        bvalue: settings.bvalue,
                        gvalue: settings.gvalue
                    }
                }
            )
            .then(() => {
                dispatch(showMessage({message: "Plant's settings successfully updated", isError: false}));
                dispatch(getUserPlants());
            })
            .catch(e => handleError(e, dispatch));
    }
}

export function deletePlant(id) {
    return function (dispatch) {
        axios
            .delete(`/plant/${id}`)
            .then(() => {
                dispatch(showMessage({message: "Plant was successfully deleted", isError: false}));
                dispatch(getUserPlants());
            })
            .catch(e => handleError(e, dispatch));
    }
}