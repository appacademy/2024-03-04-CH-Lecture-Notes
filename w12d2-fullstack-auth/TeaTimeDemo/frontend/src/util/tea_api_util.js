import { csrfFetch } from "../store/csrf";

export const requestTeas = () => {
    return fetch('/api/teas');
};

export const postTea = tea => {
    return csrfFetch('/api/teas', {
        method: 'POST',
        body: JSON.stringify(tea)
    })
}