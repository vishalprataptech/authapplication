import { api } from "./api.js";
import { tokenStore } from "./tokenStore.js";


export const authService = {
    async register({ username, email, password ,role}) {
     const {data} = await api.post("/register", {email, password,username,role})
        
        return data;
    },

    async login({username, password}){
        const {data} = await api.post("/login", {username, password})
     
        return data
    },
    async logout(){
        await api.post("/auth/logout")
        tokenStore.clear() 
    },
    async getProfile(){
        const {data} = await api.get("/user/profile")
        return data.user}
}