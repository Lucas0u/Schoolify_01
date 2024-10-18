import styles from "@/styles/Menu.module.css";
import { faMessage as farMessage, faPaste as farPaste, faUser as farUser } from '@fortawesome/free-regular-svg-icons';
import { faCalendarDays, faCalendarPlus, faChalkboardUser, faHouse, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function Menu() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showPastaMenu, setShowPastaMenu] = useState(false);
  const [activeIcon, setActiveIcon] = useState('');

  const handleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setShowPastaMenu(false); 
    setActiveIcon(showUserMenu ? '' : 'Cadastro');
  };

  const handlePastaMenu = () => {
    setShowPastaMenu(!showPastaMenu);
    setShowUserMenu(false); 
    setActiveIcon(showPastaMenu ? '' : 'Pastas');
  };

  const handleIconClick = (icon) => {
    setActiveIcon(activeIcon === icon ? '' : icon);
    setShowUserMenu(false);
    setShowPastaMenu(false);
  };

  const getLiClass = (icon) => `${styles.menuItem} ${activeIcon === icon ? styles.active : ''}`;

  return (
    <nav className={styles.Menu}>
      <div className={styles.logo}>
        <a href="/tela_login">
          <img src="/assets/iconeMenu/Logotipo.svg" alt="Logo Schoolify" />
        </a>
      </div>

      <ul>
        <li onClick={() => handleIconClick('home')} className={getLiClass('home')}>
          <FontAwesomeIcon icon={faHouse} className={styles.icon} />
          <span>Home</span>
        </li>
        <li onClick={() => handleIconClick('atividades')} className={getLiClass('atividades')}>
          <FontAwesomeIcon icon={faTasks} className={styles.icon} />
          <span>Atividades</span>
        </li>
        <li onClick={() => handleIconClick('eventos')} className={getLiClass('eventos')}>
          <FontAwesomeIcon icon={faCalendarDays} className={styles.icon} />
          <span>Eventos</span>
        </li>
        <li onClick={() => handleIconClick('mensagens')} className={getLiClass('mensagens')}>
          <FontAwesomeIcon icon={farMessage} className={styles.icon} />
          <span>Chat</span>
        </li>
      </ul>

      <div className={styles.linha}></div>
      
      {/* MENU ADM */}
      <ul>
        <li onClick={() => handleIconClick('RegistrarAtividades')} className={getLiClass('RegistrarAtividades')}>
          <FontAwesomeIcon icon={faChalkboardUser} className={styles.icon} />
          <span>Registrar Atividade</span>
        </li>
        <li onClick={() => handleIconClick('RegistrarEvento')} className={getLiClass('RegistrarEvento')}>
          <FontAwesomeIcon icon={faCalendarPlus} className={styles.icon} />
          <span>Registrar Evento</span>
        </li>
        <li onClick={handleUserMenu} aria-expanded={showUserMenu} className={getLiClass('Cadastro')}>
          <FontAwesomeIcon icon={faUserPlus} className={styles.icon} />
          <span>Cadastro</span>
          <ul className={`${styles.menuUser} ${showUserMenu ? styles.visible : ''}`}>
            <li><a href="#">Professor</a></li>
            <li><a href="#">Usuário</a></li>
          </ul>
        </li>
        <li onClick={handlePastaMenu} aria-expanded={showPastaMenu} className={getLiClass('Pastas')}>
          <FontAwesomeIcon icon={farPaste} className={styles.icon} />
          <span>Pastas</span>
          <ul className={`${styles.menuUser} ${showPastaMenu ? styles.visible : ''}`}>
            <li><a href="#">Turma</a></li>
            <li><a href="#">Disciplina</a></li>
            <li><a href="#">Livros</a></li>
          </ul>
        </li>
      </ul>

      {/* PERFIL E CONFIG */}
      <div className={styles.profile}>
        <li onClick={() => handleIconClick('perfil')} className={getLiClass('perfil')}>
          <FontAwesomeIcon icon={farUser} className={styles.icon} />
        </li>
      </div>
    </nav>
  );
}
