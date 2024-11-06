
import styleForm from "../FormSite/FormSite.module.css";
export default function FormSite() {
  return (
    <section className={styleForm.sectionForm}>
      <form action="POST">

        <div className={styleForm.input}>
          <span>Nome </span>
          <input type="text" name="" id="" />
        </div>

        <div className={styleForm.input}>
          <span>Contato</span>
          <input type="number" name="" id="" placeholder="DDD 99999-9999" className={styleForm.inputNumber}/>
        </div>

        <div className={styleForm.inputTextArea}>
          <span>Mensagem</span>
          <textarea name="duvida" id="" placeholder="Digite Aqui..." className={styleForm.textArea}></textarea>
        </div>


      </form>
    </section>

  )
}