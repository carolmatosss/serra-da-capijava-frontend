import React, { useState, useEffect, ChangeEvent } from 'react';
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import {Box} from "@mui/material";
import {Link, useNavigate } from "react-router-dom";

import {login} from "../../service/Service";
import UserLogin from '../../model/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Action';

function Login() {

    const dispatch = useDispatch();
    const [token, setToken] = useState('')
    let navigate = useNavigate();
 

  const [userLogin, setUserLogin] = useState<UserLogin>(

    {
    id: 0,
    usuario: "",
    senha: "",
    nome: "",
    endereco: '',
    cpf: 0,
    telefone: 0,
    rg: 0,
    foto: "",
    token: ""
    }
  );

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert("Usuário logado com sucesso ");
    } catch (error) {
      alert("Dados não correspondem.");
    }
  }

  useEffect(() => {
    if (token !== "") {

      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);
    
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos1">Entrar</Typography>
                        <TextField  value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuário (E-mail)" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type='password'fullWidth />
                        <Box marginTop={2} textAlign="center">
                                <Button type="submit" variant="contained" color="primary">Logar</Button>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
              <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1"
              >
                Cadastre-se
              </Typography>
            </Link>
                    </Box>
                    
                </Box>
            </Grid>
            <Grid xs={6} className="imagem"></Grid>
        </Grid>
);

}

export default Login;