import { useContext } from 'react';
import { Container } from "@mui/system";
import MainBtn from "../components/MainBtn";
import CardIcon from "../components/CardIcon";
import ScrollGalery from "../components/ScrollGalery";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import Box from "@mui/material/Box";

import contactLogo from "../assets/logo-contact.svg";
import contactPicture from "../assets/photo-contact.jpg";
import "../styles/Homepage.css";
import { AuthContext } from '../contextes/authCtx';
import { Outlet } from "react-router-dom";

const Homepage = () => {
  const auth = useContext(AuthContext);
  console.log(auth)
  return (
    <Container>
      <section id="call-to-action">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            width: 1,
            height: 540,
          }}
          className="main-img"
        >
          <h1>Sneakly, chercher moins, trouver plus !</h1>
          <MainBtn title={"Découvrir"} path={"shop"} />
        </Box>
      </section>
      <div className="yellow-rect"></div>

      <section id="brands">
        <h1>Nouveautés...</h1>
        <ScrollGalery />
        <h1>Marques...</h1>
        <ScrollGalery />
      </section>

      <section id="commitments">
        <h1>Engagements...</h1>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              fontWeight: 600,
              m: 2,
            }}
          >
            <p>
              Chez Sneakly, la satisfaction de nos clients c’est ce que nous
              avons de plus précieux.
            </p>
            <p>
              Ce site a été conçu pour vous apporter la meilleur expérience
              possible, trouver facilement ce pourquoi vous êtes venu, et plus
              encore !
            </p>
            <p>
              Aussi, dans le prolongement de cette volonté, il nous semble
              essentiel de vous parler du “après” votre commande.
            </p>
            <p>
              Nous nous engageons sur les élements suivants pour que, tout
              comme votre commande, la livraison se passe dans les meilleures
              conditions.
            </p>
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            my: 8,
            textAlign: "center",
          }}
        >
          <CardIcon
            header={"LIVRAISON OFFERTE"}
            paragraph={{
              start: "Partout en France",
              end: "Dès 150 € d'achats",
            }}
            icon={<LocalShippingOutlinedIcon fontSize="large" />}
          />
          <CardIcon
            header={"PAIEMENT EN 3 FOIS"}
            paragraph={{
              start: "Par carte bancaire",
              end: "Sans frais additionnels",
            }}
            icon={<CreditCardOutlinedIcon fontSize="large" />}
          />
          <CardIcon
            header={"SERVICE CLIENT EXPRESS"}
            paragraph={{
              start: "Réponse éclair de 9h à 20h",
              end: "Du lundi au samedi",
            }}
            icon={<LiveHelpOutlinedIcon fontSize="large" />}
          />
        </Box>
      </section>
      <div className="yellow-rect-2"></div>
      <section id="keep-in-touch">
        <Box sx={{ display: "flex", mb: 6}}>
          <img src={contactPicture} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              p: 4,
            }}
            className="contact-form"
          >
            <img src={contactLogo} alt="logo-brand" width={55} height={65} />
            <h1>On reste en contact ?</h1>

            <p>
              Des informations sur les sorties à venir, les évenemments, nos
              prochaines collections.
            </p>
            <p>Vous saurez tout avant les autres !</p>
            <input type="email" placeholder="Email*" id="contact-input"></input>
            <input type="submit" value="S'inscrire" className="alt-btn" />
            <p>
              <strong>Une newsletter par mois, ni plus, ni moins !</strong>
            </p>
            <p>Vous pouvez évidemment vous désabonner à tout instant.</p>
          </Box>
        </Box>
      </section>
    </Container>       
  );
};

export default Homepage;
