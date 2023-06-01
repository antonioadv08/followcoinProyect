import { signIn } from "next-auth/client";
import Modal from "react-modal";

Modal.setAppElement("#__next");

function LoginPage() {
  const [isOpen, setIsOpen] = useState(true);

  const handleLogin = () => {
    signIn();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseModal}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Sign in with NextAuth.js</button>
    </Modal>
  );
}

export default LoginPage;
