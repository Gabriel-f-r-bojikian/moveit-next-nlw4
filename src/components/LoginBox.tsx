import styles from '../styles/components/LoginBox.module.css';

export function LoginBox() {
  return (
    <div className={styles.loginBoxContainer}>
      <img src="Logo.svg" alt="move it" className={styles.logoContainer}/>
      
      <strong>Bem-vindo</strong>
      
      <div className={styles.gitWelcomeContainer}>
        <img src="/icons/Github.svg" alt=""/>
        <p>Faça login com o seu Github<br/> para começar</p>
      </div>
      
      <div className={styles.userNameInputField}>
        <input type="text" placeholder="Digite seu username" />
        <button type="button">
          <img src="/icons/login-button.svg" alt="Entrar"/>
        </button>
      </div>
    </div>
  )
}