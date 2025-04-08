const AuthModule = (function(){
    //Simular Usuario 
    const userBD = {
        username : "jmoreno",
        password : "2244" 
    }

    let currentUser = null;

    return{
        login(username, password){
            if(username === userBD.username && password === userBD.password){
                currentUser = UserSingleton.getInstance(username);
                console.log(`Usuario Autenticado. ${currentUser.name}`)
            }else{
                console.log("Credenciales incorectas");
            }
        },
        logout(){
            if(currentUser){
                console.log(`Hasta luego, ${currentUser.name}`)
                currentUser = null;
                UserSingleton.clearIntance();
            }else{
                console.log("No hay usuarioautenticado")
            }
        }

    }
})();