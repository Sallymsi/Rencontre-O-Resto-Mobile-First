const urlSignin = 'http://localhost:4000/api/auth/signup/';
const urlLogin = 'http://localhost:4000/api/auth/login/';


// Création de la requête POST pour l'inscription :
export function signin(options) {
    fetch(urlSignin, options)
        .then(resp => resp.json())
  
        .then((data) => {
            window.location.href = `/formInfo`;
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
                window.location.href = `/homepage`;
            }
        })
};