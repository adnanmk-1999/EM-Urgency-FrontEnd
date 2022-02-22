import { toast } from "react-toastify";
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
 // Toast-configuration method,
 // Tt is compulsory method.
 toast.configure()

 function notifyAdd(){
  // Calling toast method by passing string
  toast.success("Alert added", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};

function notifyDelete(){
// Calling toast method by passing string
toast.success("Alert Deleted", {
    position: "bottom-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

function notifyEdit(){
// Calling toast method by passing string
toast.success("Alert Updated", {
    position: "bottom-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

function notifyCancel(){
// Calling toast method by passing string
toast.error("Cancelled", {
    position: "bottom-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

function notifyEmailSend(){
  // Calling toast method by passing string
  toast.success("Email sent", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};

function notifyResponseSubmit(){
  // Calling toast method by passing string
  toast.success("Respond submitted", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};



var Toaster = {
  notifyAdd : notifyAdd,
  notifyCancel : notifyCancel,
  notifyEdit : notifyEdit,
  notifyDelete : notifyDelete,
  notifyEmailSend : notifyEmailSend,
  notifyResponseSubmit : notifyResponseSubmit
};

export default Toaster;