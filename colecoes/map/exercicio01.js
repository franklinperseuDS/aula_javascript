
getAdmins = (map) => {
    let admins = []
    for ([key, value] of map){
        if ( value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Perseu', "Admin");
usuarios.set('Luiza', "Admin");
usuarios.set('Andre', "User");
usuarios.set('Stephany', "User");

console.log(getAdmins(usuarios));