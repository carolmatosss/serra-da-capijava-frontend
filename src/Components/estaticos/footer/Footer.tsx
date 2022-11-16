import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokenReduce';
import { useNavigate } from 'react-router-dom';
import { addToken } from '../../../store/tokens/Action';



function Footer() {
  const token = useSelector<TokenState,TokenState["tokens"]>((state)=> state.tokens);
  const dispatch = useDispatch();
   let navigate = useNavigate();
 
   function goLogout() {
 dispatch(addToken(''));
     alert("Usuário deslogado");
     navigate("/login");
   }
 
   var footerComponent;
   if (token !== ""){
    footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
    <Grid alignItems="center" item xs={12}>
      <Box style={{ backgroundColor: "#FFB6C1", height: "120px" }}>
        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <a href="https://www.instagram.com/capijavageneration/" target="_blank">
            <InstagramIcon style={{ fontSize: 60, color: "white" }} />
          </a>
        </Box>
      </Box>
      <Box style={{ backgroundColor: "#FFB6C1", height: "60px" }}>
        <Box paddingTop={1}>
          <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2022 Copyright:</Typography>
        </Box>
        <Box>
            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Serra da CapiJava</Typography>
        </Box>
      </Box>
    </Grid>
  </Grid>
   }
  return (
    <>
      {footerComponent}
    </>
  )
  }

  export default Footer;