import { createContext } from "react";
export const Theme={
    dark: {
        color :"white",
        backgroundImage: `url("https://wallpaperaccess.com/full/944291.jpg")` 
        
    },
    light:{
        color :"black",
        backgroundImage: `url("http://www.witcoinc.net/wp-content/uploads/2016/01/cloud-web-background.jpg")` 
    }
}

export const ThemeContext= createContext();