import { useState } from "react";
import "./app.css";

function App() {
  const [modal, setModel] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="container-login">
        <h2 className="title-login">Login</h2>
        <div className="container-form">
          <div className="form-group">
            <input
              type="text"
              className="email-user"
              placeholder="Informe Nome"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="password"
              placeholder="Informe sua Senha"
            />
          </div>
          <div>
            <button className="btn-login" onClick={() => setModel(true)}>
              Entrar
            </button>
          </div>
        </div>
        {modal && (
          <div className="container-toast">
            <h2>Login feito com sucesso!</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
