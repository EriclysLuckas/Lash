import styleFooter from "../FooterComponent/FooterComponent.module.css";

export default function IconFooter() {
  return(
    <div className={styleFooter.linksFooter}>
            <div className={styleFooter.groupIcon}>

              <div className={styleFooter.iconFooter}>
                <a href="https://www.instagram.com/" target="_blank"> <img src="https://raw.githubusercontent.com/EriclysLuckas/Lash/refs/heads/main/img/links/instagram.png" alt="Instagram" /></a>
              </div>
              
          </div>


          <div className={styleFooter.groupIconWhatsapp}>
            <div className={styleFooter.iconFooter}>
              <a href="https://web.whatsapp.com/%F0%9F%8C%90/pt_br" target="_blank"><img src="https://raw.githubusercontent.com/EriclysLuckas/Lash/refs/heads/main/img/links/whatsapp.png" alt="WhatsApp" /></a>
            </div>
          </div>
          <div className={styleFooter.groupIconTelefone}>
            <div className={styleFooter.iconFooter}>
              <a href="tel:+6494461709" target="_blank"></a><img src="https://raw.githubusercontent.com/EriclysLuckas/Lash/refs/heads/main/img/links/telefone.png" alt="Telefone" />
            </div>
          </div>
          <div className={styleFooter.groupIconEmail}>
            <div className={styleFooter.iconFooter}>
              <img src="https://raw.githubusercontent.com/EriclysLuckas/Lash/refs/heads/main/img/links/email.png" alt="Email" />
            </div>
          </div>
        </div>

  )
}