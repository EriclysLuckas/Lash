import styleHeader from "../HeaderLash/HeaderLash.module.css";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

export default function HeaderLash() {
  const [isOpen, setIsOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(false);


  const [scrolled, setScrolled] = useState(false);



  const handleScroll = () => {
    if (window.scrollY > .1) {  
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);










  const checkMobile = () => {
    if (window.innerWidth <= 500) {
      
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkMobile(); // Verifica logo no início
    window.addEventListener("resize", checkMobile); // Escuta o evento de redimensionamento

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsOpen((prevState) => !prevState);
    console.log("Menu alterado");
  };

 

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "tipos", label: "Tipos de Designs" },
    { id: "descubra", label: "Descubra seu Estilo" },
    { id: "resultados", label: "Resultados" },
    { id: "cuidados", label: "Dicas de Cuidados" },
    { id: "contatos", label: "Contatos" },
  ];

  return (
    <section 
      className={scrolled ? styleHeader.HeaderScrolled : styleHeader.HeaderLash} 
    id="home">
      
      <div className={styleHeader.contentHeaderLash}>
        <div className={styleHeader.hambMenu}>
          {isOpen ? (
            <IoCloseSharp onClick={handleOpenMenu} />
          ) : (
            <IoMenu onClick={handleOpenMenu} />
          )}
        </div>
        <div className={styleHeader.logoLash}>
          <figure>
            <img src="../img/logo.png" alt="" />
          </figure>
        </div>
      </div>

      {isMobile && (
        <div
          className={
            isOpen ? styleHeader.menuMobile : styleHeader.menuMobileClose
          }
        >
          <div className={styleHeader.contentMenu}>
            <ul>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={handleOpenMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
