import Botao from "@/components/botoes/Botao";
import Menu from "@/components/menu/Menu";
import styles from "@/styles/Atividade.module.css";
import { useRouter } from "next/router";

export default function Atividades() {
  const router = useRouter(); 

  const handleAbrirAtividade = () => {
    router.push("/atividades_abertas"); 
  };

  return (
    <>
      <Menu />
      <div className="container_tela">
        <Botao className={styles.botao_atividade} onClick={handleAbrirAtividade}>
          Abrir Atividade
        </Botao>
      </div>
    </>
  );
}
