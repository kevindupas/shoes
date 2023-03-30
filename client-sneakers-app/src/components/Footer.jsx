import {Link} from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import "../styles/Footer.css";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <div id="footer-content">
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Liens utiles</h1>
            <ul>
              <Stack spacing={1}>
                <li>
                  <Link to={`#`}>Retours</Link>
                </li>
                <li>
                  <Link to={`#`}>Contact</Link>
                </li>
                <li>
                  <Link to={`#`}>Boutiques</Link>
                </li>
              </Stack>
            </ul>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Informations</h1>
            <ul>
              <Stack spacing={1}>
                <li>
                  <Link to={`#`}>Conditions d'utilisation</Link>
                </li>
                <li>
                  <Link to={`#`}>CGV</Link>
                </li>
                <li>
                  <Link to={`#`}>Mentions légales</Link>
                </li>
                <li>
                  <Link to={`#`}></Link>
                </li>
              </Stack>
            </ul>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Réseaux</h1>

            <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
              <FacebookOutlinedIcon />
              <TwitterIcon />
              <InstagramIcon />
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item xs={12}>
            <div id="copyright">
              <br />
              <p>© 2023 Sneakly, Inc. Tous droits résérvés</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
