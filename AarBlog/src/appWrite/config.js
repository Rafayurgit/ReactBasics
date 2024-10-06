
import conf from "../conf/conf.js" 
import {Client, ID, Account, Databases, Query, Storage} from "appwrite"

export class Service{
    client= new Client();
    dataBases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProId)
        this.dataBases= new Databases(this.client);
        this.bucket= new Storage(this.client)
    }

    async createPost({titel,slug, content, featuredImage, status, userId}){
        try{
            return await this.dataBases.createDocument(conf.appwriteDdId, conf.appwriteCollectionId, slug, {titel, content, featuredImage, status, userId})
        }catch(error){
            console.lof("AppWriteService :: createPost ::error" ,error);
        }

    }

    async updatePost(slug, {titel, content, featuredImage, status}){
        try{
            return await this.dataBases.updateDocument(conf.appwriteDdId, conf.appwriteCollectionId, slug, {titel, content, featuredImage, status})
        }catch(error){
            console.log("AppWriteService :: updatePost :: error" ,error)
        }
    }

    async deletePost({slug}){
        try{
            await this.dataBases.deleteDocument(conf.appwriteDdId. conf.appwriteCollectionId, slug)
            return true
        }catch(error){
            console.log("AppWriteService :: deletePost :: error" ,error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.dataBases.getDocument(conf.appwriteDdId, conf.appwriteCollectionId, slug)
        } catch (error) {
            console.log("AppWriteService :: getPost :: error" ,error)
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status", "active")]){
        try{
            return await this.dataBases.listDocuments(conf.appwriteDdId, conf.appwriteCollectionId, queries)
        }catch(error){
            console.log("AppWriteService :: getPosts :: error", error);
            return false;
        }
    }

    //file Upload Service

    async uploadFile(file){
        try{
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file)
        }catch(error){
            console.log("AppWriteService :: uploafFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
            return true;
        }catch(error){
            console.log("AppWriteService :: deketeFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
        
    }

}

const service= new Service();
export default service;