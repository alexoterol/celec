import './App.css';

import Grid from '@mui/material/Grid';
import HydrologyTable from './components/HydrologyTable';
import Student from './components/Student';
import { useState, useEffect } from 'react';

default interface DataHour {
  Fecha: string;
  Mazar: number;
  Molino: number;
  Sopladora: number;
}

function App() {
  // URL para la API
  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/CELEC/hidrologia_17122024.json";

  // Estado para los datos y para el manejo de carga
  const [data, setData] = useState<DataHour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Realizar la petición asíncrona para obtener los datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result: DataHour[] = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={5}>
      {/* Student */}
      <Grid xs={12}>
        {/* Enviamos los datos como props */}
        <Student apellidos="González" nombres="Juan Carlos" paralelo="A1" />
      </Grid>

      {/* HydrologyTable */}
      <Grid xs={12}>
        {/* Enviamos los datos de la API al componente HydrologyTable */}
        {loading ? (
          <p>Cargando datos...</p>
        ) : (
          <HydrologyTable data={data} />
        )}
      </Grid>
    </Grid>
  );
}

export default App;
