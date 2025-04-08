const AutModule = (function(){
    //Simular Usuario 
    const userBD = {
        username : "Admin",
        password : "1234" 
    }

    let currentUser = null;

    return{
        login(username, password){
            if(username === userBD.username && password === userBD.password){
                currentUser = UserSingleton.getInstance(username);
                console.log(`Usuario Autenticado. ${currentUser.name}`)
            }
        }
    }
})