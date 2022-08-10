const spawn = '../configs/spawn';

class Auth {
    loginAccount(player, username, password) {
        models.accounts.find({username: username}).exec((e, r) => {
            if (e) return console.log(e);
            if (r.length > 0) {
                if (r[0].password === password) {
                    player.name = username;
                    player.dimension = 0;
                    player.call("client::auth:finish", [username])
                } else {
                    player.call("client::notify", ["e", "Неправильный пароль"]);
                }
            } else {
                player.call("client::notify", ["e", "Аккаунт не найден"]);
            }
        });
    }

    registerAccount(player, username, email, password) {
        models.accounts.find({
            $or: [{
                'username': username
            }, {
                'socialClub': player.socialClub
            }, {
                'email': email
            }, {
                'HWID': player.serial
            }]
        }).exec((e, r) => {
            if (e) return console.log(e);
            if (r.length > 0) {
                if (r[0].username === username) {
                    return player.call("client::notify", ["e", "Этот логин уже занят"]);
                } else if (r[0].socialСlub === player.socialClub) {
                    return player.call("client::notify", ["e", "В этом социальном клубе уже зарегистрирована учетная запись."]);
                } else if (r[0].email === email) {
                    return player.call("client::notify", ["e", "Аккаунт уже зарегистрирован на этот адрес электронной почты"]);
                } else if (r[0].HWID === player.serial) {
                    return player.call("client::notify", ["e", "Учетная запись уже зарегистрирована на этом компьютере"]);
                }
            }

            let qData = await new User({
                username: username,
                email: email,
                password: password,
                HWID: player.serial,
                position: spawn,
                ip: player.ip,
                socialClub: player.socialClub,
            });

            player.name = username;

            let data = new models.accounts(qData);
            data.save().catch(e => console.log(e));
            player.dimension = 0;
            player.call("client::auth:finish", [username])
        });
    }
}

module.exports = new Auth();