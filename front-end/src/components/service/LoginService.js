
class LoginService{
    static idUsuario;
    static idUsuarioFixo = "6481fa5a0d7eb87ed1836929";

    static async login(username, password){
      console.log("entrou")
        const res = await fetch("/api/user", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password
            }),
          }).then(res => res.json).then(objWithoutPromise => objWithoutPromise) 
          console.log(res.id)
          this.idUsuario = res.id
          return true;
    }

    static getIdUsuario(){
      if(this.idUsuario){
        return this.idUsuario
      }else{
        console.log(this.idUsuarioFixo)
        return this.idUsuarioFixo
      }
    }
}

export default LoginService
//login eba

