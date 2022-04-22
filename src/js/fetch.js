const urlSignin = 'http://localhost:4000/api/auth/signup/';
const urlForm = 'http://localhost:4000/api/auth/form/';
const urlLogin = 'http://localhost:4000/api/auth/login/';
const urlGetUser = 'http://localhost:4000/api/auth/getUser/';


// Création de la requête POST pour l'inscription :
export function signin(options) {
    fetch(urlSignin, options)
        .then(resp => resp.json())
  
        .then((data) => {
            sessionStorage.setItem("userId", data.userId);
            window.location.href = `/formInfo`;
        })
};

// Création de la requête POST pour l'inscription :
export function form(options) {
    fetch(urlForm, options)
        .then(resp => resp.json())
  
        .then((data) => {
            window.location.href = `/profil`;
        })
};

// Création de la requête POST pour la connexion :
export function login(options) {
    fetch(urlLogin, options)
        .then(resp => resp.json())

        .then((data) => {
            console.table(data);
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("userId", data.userId);
            if (data.token) {
                window.location.href = `/profil`;
            }
        })
};

// Création de la requête GET afin de récupérer le profil en fonction de l'userId :
export async function getUser(userId) {
    return fetch(urlGetUser + userId)
        .then(resp => resp.json())

        .then((data) => {
            return data;
        })
};