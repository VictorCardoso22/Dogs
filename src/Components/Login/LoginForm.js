import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../Context/UserContext';
import Error from '../../Helper/Error';
import styles from '../Login/LoginForm.module.css';
import stylesBtn from '../Forms/Button/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handelSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="container animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handelSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
