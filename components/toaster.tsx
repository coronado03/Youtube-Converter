import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Props {
  popup: boolean;
}

const Toaster: React.FC<Props> =({ popup }) => {


  if (popup) {
    toast.success('🦄 Valid URL!', {
      position: "top-center",
      toastId: "aah",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }
  else {
    toast.error('😡 Invalid URL!', {
      position: "top-center",
      toastId: "aahh",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
      <ToastContainer position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
  );
}

export default Toaster