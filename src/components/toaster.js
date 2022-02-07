import { toast } from "react-toastify";
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
 // toast-configuration method,
 // it is compulsory method.
 toast.configure()

function Toaster () {
 
    // Calling toast method by passing string
    toast.success("Alert added!", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
}

export default Toaster;