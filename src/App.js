import "./assests/style/global.css"
import Container from '@mui/material/Container';
import Navbar from './components/Navbar/Navbar';
import routes from "./routes/routes";
import { useRoutes } from "react-router-dom";

function App() {
  const route = useRoutes(routes)

  return (
    <Container fixed >
      <Navbar />
      {route}
    </Container>
  );
}

export default App;
