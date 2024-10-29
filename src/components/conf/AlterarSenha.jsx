import Botao from '@/components/botoes/Botao';
import styles from '@/styles/Config.module.css';
import { useState } from 'react';

export default function AlterarSenha() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validações básicas
    if (newPassword !== confirmPassword) {
      setErrorMessage('As senhas não correspondem.');
      return;
    }
    
    if (newPassword.length < 6) {
      setErrorMessage('A nova senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar a nova senha para o back-end
    // Exemplo: enviar uma requisição para a API de alteração de senha

    console.log('Senha alterada com sucesso!');
    // Resetar campos após sucesso
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setErrorMessage('');
  };

  return (
    <div className={styles.containerAlterarSenha}>
      <h2>Alterar Senha</h2>
      {errorMessage && <p className={styles.errorMensage}>{errorMessage}</p>} 

      <form className={styles.formAlterarSenha} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="current-password">Senha Atual</label>
          <input
            type="password"
            id="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Nova Senha</label>
          <input
            type="password"
            id="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <Botao className={styles.botaoAlterarSenha} type="submit">Salvar</Botao>
        </div>
      </form>
    </div>
  );
}
