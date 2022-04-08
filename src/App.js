import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./LoginComponent";
import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  AppBar,
  Card,
  CardActions,
  CardContent,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
export default function App() {
  const [render, setRender] = useState(true);
  // const context = useContext();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2px", margin: "1px" }}>
      {render ? (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Guvi
                </Typography>
                <Button
                  color="inherit"
                  onClick={() => {
                    setRender(!render);
                  }}
                >
                  <Link to="/login">Login</Link>
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <br />

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                XYZ Organization,
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                India
              </Typography>
              <Typography variant="body2">
                Learning is the key to success
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setRender(!render)}>
                <Link to="/contactus">CONTACT US</Link>
              </Button>
            </CardActions>
          </Card>
          <br />
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained" onClick={() => setRender(!render)}>
                <Link to="/adminlogin">Admin Login</Link>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => setRender(!render)}>
                <Link to="/studentlogin">Student Login</Link>
              </Button>
            </Grid>
          </Grid>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>React JS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Node JS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Angular JS</Typography>
            </AccordionSummary>
          </Accordion>
        </>
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="/contactus" element={<ContactUsComponent />}></Route>
        <Route path="/studentlogin" element={<StudentLoginComponent />}></Route>
        <Route path="/adminlogin" element={<AdminLoginComponent />}></Route>
      </Routes>
    </div>
  );
}

// function LoginComponent() {
//   return <h3>This is login component</h3>;
// }

function AdminLoginComponent() {
  return <h3>This is adminLogin component</h3>;
}

function StudentLoginComponent() {
  return <h3>This is studentLogin component</h3>;
}

function ContactUsComponent() {
  return <h3>This is contactUs component</h3>;
}
