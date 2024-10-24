import Login from "@/components/tela_login/Login";
import RecuperarSenha from "@/components/tela_login/RecuperarSenha";
import styles from "@/styles/Login.module.css";
import { useState } from "react";

export default function TelaLogin() {
  const [isRecoveringPassword, setIsRecoveringPassword] = useState(false);

  const handleRecoverPasswordClick = () => {
    setIsRecoveringPassword(true);
  };

  const handleBackToLoginClick = () => {
    setIsRecoveringPassword(false);
  };

  return (
    <div className={styles.tela_login}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/assets/icones/Logo.svg" alt="Logo Schoolify" />
          <h3>Painel de controle</h3>
          <p className={styles.descricao}>
            O Schoolify é um aplicativo de gestão escolar que visa melhorar a
            comunicação entre escolas e pais. Com ele, você pode gerenciar
            atividades, eventos e mensagens de forma eficiente.
          </p>
        </div>
        <div className={styles.container_login}>
          {isRecoveringPassword ? (
            <RecuperarSenha onBackToLogin={handleBackToLoginClick} />
          ) : (
            <Login onRecoverPassword={handleRecoverPasswordClick} />
          )}
        </div>
      </div>
      <footer className={styles.footer}>
        <p>
          Ao continuar, você concorda com os <a href="#">Termos de Serviço</a> e <a href="#">Política de Privacidade</a> do Schoolify.
        </p>
      </footer>
    </div>
  );
}
