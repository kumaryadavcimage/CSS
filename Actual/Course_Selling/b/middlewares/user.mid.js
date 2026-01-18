import jwt from "jsonwebtoken"
import config from "../config"


function userMiddleware(req,res,next){
    const authHeader=req.headers.authorization;

    if(!authHeader || !authHeader.starWith('Bearer')){
        return res.status(401).json({errors: "No taken provided"});

    }
    const token=authHeader.split(" ")[1];
    try {
        const decoded=jwt.verify(token, config.JWT_USER_PASSWORD);
        req.userId=decoded.id;
        next()
    } catch (error) {
        return res.status(401).json({errors: "Invalid token or expired"})
        console.log("Invalid token or expired token: "+error);
    }
}

export default userMiddleware