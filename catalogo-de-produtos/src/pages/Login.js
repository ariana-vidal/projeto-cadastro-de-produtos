import React  from 'react';
// import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { NUM_MIN_CARACT } from '../services/constants';

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  // useEffect(() => {
  //   const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  //   if (emailRegex.test(email) && password.length >= NUM_MIN_CARACT) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // }, [email, password]);

  return (
    <section className="sectionLogin">
      <h3>Login</h3>
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            name="senha"
          />
        </label>
        <button
          type="button"
          onClick={history.push('/register')}
           
        >
          Enter
        </button>
      </form>
    </section>
  );
}

export default Login;
