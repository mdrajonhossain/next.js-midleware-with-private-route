import { NextResponse } from "next/server";



export default function middleware(req){
    let verify = req.cookies.get("loggedin");
    let url = req.url
    
    if(!verify && url.includes('/dash')){
        return NextResponse.redirect("http://localhost:3000/");
    }

    if (verify && url === "http://localhost:3000/") {
      return NextResponse.redirect("http://localhost:3000/dash");
    }


    let user_verify = req.cookies.get("user_loggedin");
    let user_url = req.url
    
    if(!user_verify && user_url.includes('/user/user')){
        return NextResponse.redirect("http://localhost:3000/user");
    }

    if (user_verify && user_url === "http://localhost:3000/user") {
      return NextResponse.redirect("http://localhost:3000/user/user/panel");
    }


}