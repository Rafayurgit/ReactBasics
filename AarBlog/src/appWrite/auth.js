import conf from "../conf/conf"
import {Client, Account, ID} from "appwrite"

export class Authservice{
    Client =new Client();
    account;

    constructor(){
        this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProId)
        this.account=new Account(this.Client)
    }

    async createAccount({email, password, name}){
        try{     
            const userAccount=await this.account.create(Id.unique(), email, password, name);
            if(userAccount){
                //call another function
                return this.login({email,password})
            }else{
                return userAccount;
            }

        }
        catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password)
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logOut(){
        try{
            return await this.account.deleteSession();
        }catch(error){
            console.log("Appwrite serive :: logOut :: error", error);
        }
    }


}

const authservice= new Authservice();
export default authservice