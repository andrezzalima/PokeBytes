class LoginService{
    static idUsuario;

    static async login(username, password){
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
          this.idUsuario = res.id
          return true;
    }
}

export default LoginService
//login eba