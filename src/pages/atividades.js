import Botao from "@/components/botoes/Botao";
import Menu from "@/components/menu/Menu";
import styles from "@/styles/Atividade.module.css";
import { useRouter } from "next/router"; // Importando o Router do Next.js

export default function Atividades() {
  const router = useRouter(); // Criando uma instância do Router

  const handleAbrirAtividade = () => {
    router.push("/atividades_abertas"); // Navegação programática
  };

  return (
    <>
      <Menu />
      <div className="container_tela">
        <h1>Atividades</h1>
        <Botao className={styles.botao_atividade} onClick={handleAbrirAtividade}>
          Abrir Atividade
        </Botao>
      </div>
    </>
  );
}
