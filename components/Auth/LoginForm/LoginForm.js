export default function LoginForm(props) {
  const { showRegisterForm } = props;

  return (
    <div>
      <h1>Formulario de Login</h1>
      <button onClick={showRegisterForm}>ir al registro</button>
    </div>
  );
}
