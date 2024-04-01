import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'




cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    cloud_api_key:process.env.CLOUD_API_KEY,
    cloud_api_secret_key:process.env.CLOUD_API_SECRET_KEY
})

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

  try {
    const uploadFile = async (localPath)=>{
        if(!localPath) return null
     const response=  await cloudinary.uploader.upload(localPath, {
            resources_type:"auto"
        })
        console.log("File uploaded successfully", response);
        return response;
    }
  } catch (error) {
        fs.unlink(localPath);
        return null;
  }

  export {uploadFile}