import AtvAberta from "@/components/atividades/AtvAberta";
import Comments from "@/components/comentarios_chat/Comments";
import Menu from "@/components/menu/Menu";
import styles from '@/styles/Atividade.module.css';
import { useRouter } from 'next/router';
import { useState } from "react";

export default function AtividadeAbertas() {
  const router = useRouter();

  const atividades = [
    {
      titulo: "História",
      turma: "4° - A",
      dataInicio: "01/10/2024",
      dataEntrega: "15/10/2024",
      assunto: "A Revolução Francesa",
      descricao: `Explore as causas, eventos e consequências da Revolução Francesa. Esta atividade visa aprofundar o seu entendimento sobre um dos eventos mais importantes da história mundial.

      Leitura: Leia os materiais indicados para ter uma base sólida sobre o tema.

      Escrita: Escreva um ensaio de 500 palavras sobre o impacto da Revolução Francesa na política moderna.

      Materiais de Apoio:

      Livro: "A Revolução Francesa" de Georges Lefebvre

      Livro: "Impacto da Revolução Francesa na Política Moderna"`,
    },
    {
      titulo: "História",
      turma: "4° - A",
      dataInicio: "05/10/2024",
      dataEntrega: "20/10/2024",
      assunto: "A Segunda Guerra Mundial",
      descricao: `Entenda o contexto e os principais eventos da Segunda Guerra Mundial...`,
    },
  ];

  const [atividadeAtual, setAtividadeAtual] = useState(0);

  // Função para navegar para a próxima atividade
  const handleNext = () => {
    if (atividadeAtual < atividades.length - 1) {
      setAtividadeAtual(atividadeAtual + 1);
    }
  };

  // Função para navegar para a atividade anterior
  const handlePrev = () => {
    if (atividadeAtual > 0) {
      setAtividadeAtual(atividadeAtual - 1);
    }
  };

  // Função para voltar para a página de atividades
  const handleBack = () => {
    router.push("/atividades");
  };

  return (
    <>
      <Menu />
      <div className="container_tela">
        <div className={styles.Container_Atividade}>
          <AtvAberta
            atividade={atividades[atividadeAtual]}
            onPrev={handlePrev}
            onNext={handleNext}
            canGoPrev={atividadeAtual > 0}
            canGoNext={atividadeAtual < atividades.length - 1}
            onBack={handleBack}
          />
        </div>
        <Comments />
      </div>
    </>
  );
}