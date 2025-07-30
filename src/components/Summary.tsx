import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Summary() {
    return (
        <Box sx={{ padding: 2 }}>
            {/* Título de Resumen */}
            <Typography component="h1" variant="h4" gutterBottom>
                Resumen
            </Typography>

            {/* Párrafo descriptivo */}
            <Typography variant="body1" paragraph>
                Este es un resumen detallado que puedes personalizar para mostrar la información relevante
                sobre el contenido que desees. Aquí podrías agregar más detalles o una lista de puntos importantes.
            </Typography>

            {/* Lista de elementos importantes */}
            <Typography variant="h6" gutterBottom>
                Puntos Clave:
            </Typography>
            <ul>
                <li>Primer punto importante</li>
                <li>Segundo punto importante</li>
                <li>Tercer punto importante</li>
            </ul>
        </Box>
    );
}
