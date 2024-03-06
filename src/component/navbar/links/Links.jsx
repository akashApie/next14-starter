"use client";

import { useState } from "react";
import style from "./links.module.css";
import NavbarLinks from "./navbarLinks/navbarLinks";

const links=[
    {
        title:"Home",
        path:"/"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Contact",
        path:"/contact"
    },
    {
        title:"Blog",
        path:"/blog"
    },
];

const Links = () => {
    const {open,setOpen}=useState(false);

    const session=true;
    const isAdmin=true;

    return (
        <div className={style.container}>
        <div className={style.link}>
         {
            links.map((link=>( 
            <NavbarLinks items={link} key={link.title}/>
            )
            ))
         }
         {
            session?(
            <>
            {isAdmin && <NavbarLinks items={{title:"Admin",path:"/admin"}}/>}
            <button className={style.logout}>Logout</button>
            </>):(
                <NavbarLinks items={{title:"Login", path:"/login"}}/>
            )}
        </div>
        <button onClick={()=>setOpen((prevs)=>!prevs)}>Menu</button>
            {
                open && (
                    <div className={style.mobilelink}>
                        {
                            links.map((link=>(
                                <NavbarLinks items={{link}} key={link.title}/>
                            )))
                        }
                    </div>
                )
            }
        </div>
    )
        }

export default Links;