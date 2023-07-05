import { Alert, AlertColor, Snackbar } from "@mui/material";

interface SnackBarProps {
  open: boolean;
  severity: AlertColor;
  children?: React.ReactNode;
  autoHideDuration?: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SnackBar = (props: SnackBarProps) => {
  const handleClose = () => props.setOpen(false);

  return (
    <Snackbar
      open={props.open}
      autoHideDuration={props.autoHideDuration || 6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert variant="filled" severity={props.severity}>
        {props.children}
      </Alert>
    </Snackbar>
  );
};
