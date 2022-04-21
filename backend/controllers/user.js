const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dbCon = require("../others/ConDB");

// Enregistre un nouvel utilisateur dans la base de donnée :
exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let nom = req.body.nom;
            let prenom = req.body.prenom;
            let email = req.body.email;
            let password = hash;
            let sql = "INSERT INTO utilisateur (nom, prenom, email, password) VALUES (?, ?, ?, ?)";

            const db = dbCon();

            db.connect(function(err) {
                if (err) throw err;
                db.query(sql, [nom, prenom, email, password], function (err) {
                    if (err) throw err;
                    res.status(201).json({ message: 'Utilisateur créé !' })
                }); 
            })
        })
        .catch(error => res.status(500).json({ message: error }));
};

// Recherche si les identifiants sont correct et accorde un Token valable 24h afin de sécuriser la session de l'utilisateur :
exports.login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let sql = "SELECT * FROM  utilisateur WHERE email= ?";

    //console.log(req.body);

    const db = dbCon();


    db.connect(function(err) {
        if (err) throw err;
        db.query(sql, [email], function (err, result) {
            if (err) throw err;
            //console.log(result);
            if (!result[0]) {
                return res.status(401).json({ error: "utilisateur introuvable" })
            };
            
            bcrypt.compare(password, result[0].password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: result[0].id,
                        token: jwt.sign(
                            { userId: result[0].id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )  
                    });  
                })
                .catch(error => res.status(500).json({ error }));
        }); 
    })
};