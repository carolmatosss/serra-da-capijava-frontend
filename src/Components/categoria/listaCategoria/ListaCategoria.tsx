import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "./ListaTema.css";
import Categoria from '../../../model/Categoria';
import { busca } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokenReduce";
import { toast } from "react-toastify";

function ListaCategoria() {
  let navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria[]>([]);
  const token = useSelector<TokenState,TokenState["tokens"]>((state)=> state.tokens);


  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position:"top-right",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick:true,
        pauseOnHover:false,
        draggable:false,
        theme:"colored",
        progress: undefined,
  
      });
      navigate("/login");
    }
  }, [token]);

  async function getCategoria() {
    await busca("/categoria", getCategoria, {
      headers: {
        'Authorization': token,
      },
    });
  }

  useEffect(() => {
    getCategoria();
  }, [categoria.length]);
  return (
    <>
      {categoria.map((categoria) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {categoria.tipos}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioCategoria/${categoria.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaCategoria;