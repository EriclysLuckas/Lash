import { FaInstagram } from "react-icons/fa";
import syleInfoRange from "../InfoRange/InfoRange.module.css";



export default function InfoRange() {
  
 return(
  <aside className={syleInfoRange.asideHeader}>
          <div className={syleInfoRange.contentAsideHeader}>
            <span className={syleInfoRange.spanAsideHeaderContact}><strong>Contato:</strong> (83) 99999-9999 </span>
            <div className={syleInfoRange.buttonAsideHeader}>
              <span className={syleInfoRange.spanAsideHeader}> <a href="https://www.instagram.com/" target="_blank">Se encante!</a> </span>
              
              <span className={syleInfoRange.iconAsideHeader}>
                    <figure className={syleInfoRange.figureIconAside}>
                      <FaInstagram/>
                    </figure>
              </span>
            </div>

          </div>
        </aside>
 ) 

}




