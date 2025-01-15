import axios from "axios"

export async function onLogOut(router) {
    try{
        const response = await axios.post('/api/users/logout')
        console.log("Logout successfull");
        console.log(response.data)
        router.push("/");
    }catch(error){
        console.log("Log out failed!");
        console.log(error);
    }
}

export function onProfile(router) {
    router.push("/profile");
}

export function onUsers(router){
    router.push("/users")
}
