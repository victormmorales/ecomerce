export default function RegisterForm(props) {
  const { showLoginForm } = props;
  return (
    <div>
      <h1>Registro formulario</h1>
      <button onClick={showLoginForm}>Login</button>
    </div>
  );
}
