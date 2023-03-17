import  Stack  from "@mui/system/Stack";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Rightbar from "./components/Rightbar";
import Container from "@mui/system/Container"
import Navbar from "./components/Navbar";
import { Box } from "@mui/system";
function App() {
  return (
    <Box>
    <Navbar/>
    <Container maxWidth="xl">
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Menu/>
    <Content/>
    <Rightbar/>
  </Stack>
  </Container>
  </Box>
  );
}

export default App;
