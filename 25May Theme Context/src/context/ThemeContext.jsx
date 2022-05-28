import React,{useState} from 'react';
import data from "../style";

export const ThemeContext = React.createContext()
export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme]=useState(data)
    const handletoggle =()=>{
        if(theme === data.dark){
            console.log("theme changing")
            setTheme(data.light)
        }
        else{
            setTheme(data.dark)
        }
    }

  return (
    <div>
        <ThemeContext.Provider value={[theme,handletoggle]}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}