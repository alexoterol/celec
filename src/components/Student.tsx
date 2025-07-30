import Typography from '@mui/material/Typography';

// Definir los props: apellidos, nombres y paralelo
interface Info {
  apellidos: string;
  nombres: string;
  paralelo: string;
}

export default function Student({ apellidos, nombres, paralelo }: Info) {
  return (
    <>
      <Typography component="p" variant="h4">
        {/* Renderizamos apellidos y nombres */}
        {`${nombres} ${apellidos}`}
      </Typography>

      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {/* Renderizamos el paralelo */}
        {`Paralelo # ${paralelo}`}
      </Typography>
    </>
  );
}
