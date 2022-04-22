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
            let sqlId = "SELECT * FROM  utilisateur WHERE email = ?";

            const db = dbCon();

            db.connect(function(err) {
                if (err) throw err;
                db.query(sql, [nom, prenom, email, password], function (err) {
                    if (err) throw err;
                });

                db.query(sqlId, [email], function (err, result) {
                    if (err) throw err;
                    res.status(201).json({ userId: result[0].id });
                }); 
            })
        })
        .catch(error => res.status(500).json({ message: error }));
};

// Enregistre les information annexes après l'inscription :
exports.form = (req, res) => {
    let genre = req.body.genre;
    let birth = req.body.birth;
    let userId = req.body.userId;
    let location = req.body.location;
    let postal = req.body.postal;
    let image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    let sql = "UPDATE utilisateur SET genre = ?, birth = ?, location = ?, postal = ?, image = ? WHERE id = ?";
    console.log(image);

    const db = dbCon();

    db.connect(function(err) {
        if (err) throw err;
        db.query(sql, [genre, birth, location, postal, image, userId], function (err) {
            if (err) throw err;
            res.status(201).json({ message: 'Infos utilisateur ajouté !' })
        }); 
    })
};

// Recherche si les identifiants sont correct et accorde un Token valable 24h afin de sécuriser la session de l'utilisateur :
exports.login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let sql = "SELECT * FROM  utilisateur WHERE email= ?";

    const db = dbCon();


    db.connect(function(err) {
        if (err) throw err;
        db.query(sql, [email], function (err, result) {
            if (err) throw err;
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

// Récupère les infos du profil en fonction de l'userId :
exports.getUser = (req, res) => {
    let userId = req.params.userId;
    let sql = 'SELECT nom, prenom, genre, birth, location, postal, image FROM utilisateur WHERE id = ?'

    const db = dbCon();

    db.connect(function(err) {
        if (err) throw err;
        db.query(sql, [userId], function (err, result) {
            if (err) throw err;
            res.status(201).json(result[0])
        }); 
    })
}