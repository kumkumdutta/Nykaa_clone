import React from 'react'
import '../css/Navone.css'
import { TbShoppingBag } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

export const Navone = () => {
  return (
    <div id='Parent'>
        <div id='son'>
        <div id='logo'>
            <img src='https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.png' alt='Nykaa' id='logoimg'/>
        </div>
        <div>
            <button>Categories</button>
            </div>
        <div><button>Brand</button></div>
        <div><button>Luxe</button></div>
        <div><button>Nykaa Fashion</button></div>
        <div><button>Beauty Advice</button></div>
        </div>

        <div id='Daughter'>
        <div id='second'>
           
           <div id='inputDiv'>
               <div>
               <CiSearch id='icon' />
               </div>
           
           <input type='text' placeholder='Search on Nykaa' id='inputbox' />
           </div>
           <div>
              <button>Search</button>
           </div>
          
       </div>
        <div id='icondiv'>
           <TbShoppingBag id='icontwo'/>
            </div>
        </div>
        

    </div>
  )
}
