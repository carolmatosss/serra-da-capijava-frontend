import React from "react";
import "./Sobre.css";
import { Box, Typography, Button, TextField } from "@material-ui/core";
import { GitHub } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid, Tab, Tabs } from "@mui/material";

function Sobre() {
  return (
    <>
        <Typography variant="h1" className="titulos" >Sobre</Typography>
        <Typography className="texto1">
            Você sabia que a Serra da Capivara, no Piauí, tem a maior concentração
            de sítios arqueológicos do mundo? Nós, da CapiJava, por meio de nosso
            projeto sem fins lucrativos,buscamos a preservação desse patrimônio
            cultural.
          </Typography>
        <Typography className="titulos">Serra da Capivara</Typography>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={3} className="boxFoto1">
          <img
            className="imgBox1"
            src="https://i.imgur.com/oet0gl6.jpg"
            alt="imagem da Serra da Capivara"
          />
        </Grid>
        <Grid item xs={9} padding="2rem" className="texto1">
          <Typography className="texto1">
            Você sabia que a Serra da Capivara, no Piauí, tem a maior concentração
            de sítios arqueológicos do mundo? Nós, da CapiJava, por meio de nosso
            projeto sem fins lucrativos,buscamos a preservação desse patrimônio
            cultural.
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={9} padding="2rem">
          <Typography className="texto1">
            O Parque Nacional Serra da Capivara foi criado em 1979, para preservar vestígios arqueológicos da mais remota presença do homem na América do Sul. Sua demarcação foi concluída em 1990 e o parque é subordinado ao Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). Por sua importância, a Unesco o inscreveu na Lista do Patrimônio Mundial em 13 de dezembro de 1991, e também na Lista Indicativa brasileira como patrimônio misto.
          </Typography>
        </Grid>
        <Grid item xs={3} className="boxFoto1">
          <img
            className="imgBox1"
            src="https://i.imgur.com/C0ZLn4c.jpg"
            alt="Foto de uma onça pintada"
          />
        </Grid>
      </Grid>
      <Box>
        <Typography className="titulos">Equipe</Typography>

        <div className='box-card'>
          <div className="card ">
            <div className="front">
              <img
                src="https://i.imgur.com/yE542nv.jpg"
                alt="Foto Audrey Albuquerque sorrindo"
              />
            </div>

            <div className="back">
              <div className="back-content">
                <h2>Audrey Albuquerque</h2>
                <div className="icons">
                  <a target="_blank" href="https://www.linkedin.com/in/audrey-albuquerque/" ><LinkedInIcon /></a>
                  <a target="_blank" href="https://github.com/Dry-A"><GitHub /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card ">
            <div className="front">
              <img
                src="https://i.imgur.com/WaIjjZp.jpg"
                alt="Foto Carolyne Matos sorrindo"
              />
            </div>

            <div className="back">
              <div className="back-content">
                <h2>Carolyne Matos</h2>

                <div className="icons">
                  <a target="_blank" href="https://www.linkedin.com/in/carolynematos/"><LinkedInIcon /></a>
                  <a target="_blank" href="https://github.com/carolmatosss"><GitHub /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card ">
            <div className="front">
              <img
                src="https://i.imgur.com/N6h0nvM.jpg"
                alt="Foto Daniela Rocha sorrindo"
              />
            </div>

            <div className="back">
              <div className="back-content">
                <h2>Daniela Rocha</h2>
                <div className="icons">
                  <a target="_blank" href="https://www.linkedin.com/in/daniela-rocha-a6337932/"><LinkedInIcon /></a>
                  <a target="_blank" href="https://github.com/danirocha87"><GitHub /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card ">
            <div className="front">
              <img
                src="https://i.imgur.com/3RhkXNF.jpg"
                alt="Foto Erika Feijo sorrindo"
              />
            </div>

            <div className="back">
              <div className="back-content">
                <h2>Erika Feijo</h2>

                <div className="icons">
                  <a target="_blank" href="https://www.linkedin.com/in/erikafeijo/"><LinkedInIcon /></a>
                  <a target="_blank" href="https://github.com/erikafeijo"><GitHub /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card ">
            <div className="front">
              <img
                src="https://i.imgur.com/04LKnci.png"
                alt="Foto Nathalie Brasil sorrindo"
              />
            </div>

            <div className="back">
              <div className="back-content">
                <h2>Nathalie Brasil</h2>

                <div className="icons">
                  <a target="_blank" href="https://www.linkedin.com/in/nathalie-brasil/"><LinkedInIcon /></a>
                  <a target="_blank" href="https://github.com/nathaliebfm"><GitHub /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card ">
            <div className="front">
              <img
                src="https://i.imgur.com/EPIskHX.jpg"
                alt="Foto de Roberta Ribeiro sorrindo"
              />
            </div>

            <div className="back">
              <div className="back-content">
                <h2>Roberta Ribero</h2>

                <div className="icons">
                  <a target="_blank" href="https://www.linkedin.com/in/roberta-ribeiro-ela-she-b5521a4b/"><LinkedInIcon /></a>
                  <a target="_blank" href="https://github.com/HarukaIonaSao"><GitHub /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="card ">
            <div className="front">
              <img
                src="https://i.imgur.com/ojStaCH.jpg"
                alt="Foto Thais Araújo sorrindo"
              />
            </div>

            <div className="back">
              <div className="back-content">
                <h2>Thais Araújo</h2>
                <div className="icons">
                  <a target="_blank" href="https://www.linkedin.com/in/thais4rauj0/"><LinkedInIcon /></a>
                  <a target="_blank" href="https://github.com/thais4rauj0 "><GitHub /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Box>
    </>
  );
}

export default Sobre;