import { toast as sonnerToast } from "sonner";
import { CustomToast } from "../components/ui/CustomToast";

export const toast = {
  success: (message: string) => {
    return sonnerToast.custom((id) => (
      <CustomToast id={id} message={message} type="success" />
    ));
  },

  error: (message: string) => {
    return sonnerToast.custom((id) => (
      <CustomToast id={id} message={message} type="error" />
    ));
  },
};
