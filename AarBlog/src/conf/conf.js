

const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDdId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf