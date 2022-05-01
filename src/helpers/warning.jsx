import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function toastError() {
  return toast.success(`Saved!`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
