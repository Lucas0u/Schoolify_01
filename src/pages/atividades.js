import Atividade from "@/components/atividades/Atividade";
import Menu from "@/components/menu/Menu";
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
        <Atividade />
        {/* <Botao className={styles.botao_atividade} onClick={handleAbrirAtividade}>
          Abrir Atividade
        </Botao> */}
      </div>
    </>
  );
}
