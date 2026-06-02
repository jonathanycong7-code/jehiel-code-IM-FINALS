async function login(){

    const username =
    document.getElementById(
        "username"
    ).value;

    const password =
    document.getElementById(
        "password"
    ).value;

    try{

        const res =
        await fetch(
            "http://localhost:3000/login",
            {
                method:"POST",

                headers:{
                    "Content-Type":
                    "application/json"
                },

                body:JSON.stringify({
                    username,
                    password
                })
            }
        );

        const data =
        await res.json();

        if(data.success){

            localStorage.setItem(
                "user_id",
                data.user.id
            );

            localStorage.setItem(
                "username",
                data.user.username
            );

            window.location.href =
            "dashboard.html";

        }else{

            document.getElementById(
                "message"
            ).innerText =
            "Invalid Username or Password";

        }

    }catch(err){

        console.log(err);

    }

}