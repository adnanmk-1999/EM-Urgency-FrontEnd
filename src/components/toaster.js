import { toast } from "react-toastify";
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
 // Toast-configuration method,
 // It is compulsory method.
 toast.configure()

 function notifyAdd(){
  toast.success("Alert added", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};

function notifyDelete(){
toast.success("Alert Deleted", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

function notifyEdit(){
toast.success("Alert Updated", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

function notifyCancel(){
toast.error("Cancelled", {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

function notifyEmailSend(){
  toast.success("Message Sent", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};

function notifyResponseSubmit(){
  toast.success("Respond submitted", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};

function notifySelectOption(){
  toast.error("Please select an option", {
      position: "top-center",
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
  notifyResponseSubmit : notifyResponseSubmit,
  notifySelectOption : notifySelectOption
};

export default Toaster;