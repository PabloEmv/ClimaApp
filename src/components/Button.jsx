import { LoadingButton } from "@mui/lab";
import React from "react";

export default function Button({loading}) {
  return (
    <LoadingButton
      type="submit"
      variant="contained"
      loading={loading}
      loadingIndicator="Buscando..."
    >
      Buscar
    </LoadingButton>
  );
}
