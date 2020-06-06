import { API } from '../config';

export const signUp = (user) => (
    fetch(`${API}/signUp`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(user)
    },
    )
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err);
        })
)

export const signIn = (user) => (
    fetch(`${API}/signIn`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(user)
    },
    )
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err);
        })
)

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}

export const signOut = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
        next()
        return fetch(`${API}/signOut`, {
            method: "GET"
        })
            .then((response) => {
                console.log('signOut', response)
            })
            .catch((err) => {
                console.log('error', err)
            })
    }
}

export const isAuthenticate = () =>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'));
    } else{
        return false;
    }
}