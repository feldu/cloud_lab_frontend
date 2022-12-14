import * as actions from "../actions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";


function handleError(e, dispatch) {
    if (e.response.status === 400)
        dispatch(showMessage({message: "User input error", isError: true}));
    if (e.response.status === 404)
        dispatch(showMessage({message: "Not found", isError: true}));
    if (e.response.status === 500)
        dispatch(showMessage({message: "Shit happens...", isError: true}));
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
            .post('/auth/signup', {
                username: user.username,
                password: user.password,
                fullName: user.fullName,
            })
            .then(response => {
                dispatch(showMessage({message: response.data, isError: false}))
            })
            .catch(e => {
                if (e.response.status === 400)
                    dispatch(showMessage({message: e.response.data, isError: true}));
                else handleError(e, dispatch)
            });

    }
}

export function signInUser(user) {
    return function (dispatch) {
        let formData = new FormData();
        formData.append('username', user.username);
        formData.append('password', user.password);
        axios
            .post('/auth/signin', formData)
            .then(response => {
                if (response.status === 200) {
                    //todo: handling and redirect
                    let url = new URL(response.request.responseURL);
                    if (url.searchParams.has("error"))
                        dispatch(showMessage({message: "Sign in error", isError: true}));
                    else
                        window.location.href = response.request.responseURL;
                }
            })
            .catch(e => handleError(e, dispatch));
    }
}