
import { useState } from "react";
import App from "./App";
import { Babu } from "./Babu";
import { Chandhini } from "./Chandhini";
import { Parent1ClassComp } from "./ChildToParent/Parent1ClassComp";
import { Parent2ClassComp } from "./ChildToParent/Parent2ClassComp";
import { Parent3ClassComp } from "./ChildToParent/Parent3ClassComp";
import { Parent4ClassComp } from "./ChildToParent/Parent4ClassComp";
import { ParentClassComp } from "./ChildToParent/ParentClassComp";
import { Albumscls } from "./Component/Albumscls";
import { Cartcls } from "./Component/Cartcls";
import { Commentscls } from "./Component/Commentscls";
import { Filtextidcls } from "./Component/Filtextidcls";
import { Filtextnamecls } from "./Component/Filtextnamecls";
import { Filtextusercls } from "./Component/Filtextusercls";
import { Photcls } from "./Component/Photcls";
import { Postcls } from "./Component/Postcls";

import { Todoscls } from "./Component/Todoscls";
import { USercls } from "./Component/Usercls";
import { Hemanth } from "./Hemanth";
import { Latha } from "./Latha";
import { Mansur } from "./Mansur";
import { Nithya } from "./Nithya";


export function Harish(){
    return(
        <div>
          {/* <Nithya/>
         <App/>
         <Mansur/>
         <Babu/>
         <Chandhini/>
         <Latha/>
         <Hemanth/> */}
        


          {/* <Todoscls/>
         <Filtextidcls/>
         <Filtextusercls/>
         <Filtextnamecls/> */}
         <Postcls/>
         <USercls/>
         <Cartcls/>
         <Commentscls/>
         <Albumscls/>
         {/* <Photcls/>  */}



           <ParentClassComp/>
        <Parent2ClassComp/>
       <Parent3ClassComp/>
        <Parent4ClassComp/>
        <Parent1ClassComp/> 
     

        </div>
    )
                    
      
         


       
        
      
}