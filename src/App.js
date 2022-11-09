import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Header from './compontents/header';

function App() {
  return (
    <Box className="App">
      <Header/>
      <Container>
        <Typography width = "50%" margin="10px auto 20px auto" variant="h5" align="center" color="text.secondary" paragraph>
          Lamp oil. Rope? Bombs? You want it? It's yours my friend. As long as you have enough rupees. Sorry link, I can't give credit. Come back when you're a little.... mmmmm Richer!
        </Typography>
        <Button idName="catalogue">Our Catalogue</Button>
      </Container>
    </Box>
  );
}

export default App;
