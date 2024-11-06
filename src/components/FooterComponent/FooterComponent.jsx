import styleFooter from "../FooterComponent/FooterComponent.module.css";
import FormSite from '../FormSite/FormSite';
import IconFooter from '../IconsFooter/IconsFooter';

export default function FooterComponent() {
  return (
    <section className={styleFooter.sectionFooter} id = "contatos">
      <div className={styleFooter.logoFooter}>
        <img src="../img/logo.png" alt="" />
      </div>
      <div className={styleFooter.contentFooter}>
        <div className={styleFooter.linksIcons}>
          <IconFooter />

          <div className={styleFooter.icons}>
            <span><strong>Contato:</strong> (83) 9 9999-9999</span>
            <span><strong>E-mail:</strong> teste@teste.com.br</span>
          </div>

        </div>
        <FormSite />

        <div className={styleFooter.imgProfissional}> <img src="../img/profissional.png" alt="" />
        </div>
      </div >

    </section >

  )
}