import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import Produtos from "../../../model/Produtos";
import { busca } from "../../../service/Service";
import "./ListaProdutos.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokenReduce";
import { toast } from "react-toastify";

function ListaProdutos() {
  let navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produtos[]>([]);
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

  async function getProdutos() {
    await busca("/produtos", setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProdutos();
  }, [produtos.length]);

  return (
    <>
      {produtos.map((produtos) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Produtos
              </Typography>
              <Typography variant="h5" component="h2">
                {produtos.nome}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.preco}
              </Typography>
              <Typography variant="body2" component="p">
                {produtos.categoria?.tipos}
              </Typography>
              <Typography variant="h5" component="h2">
                {produtos.tamanho}
                </Typography>
              <Typography variant="h5" component="h2">
                {produtos.quantidade}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioProdutos/${produtos.id}`}
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
                <Link
                  to={`/deletarProdutos/${produtos.id}`}
                  className="text-decorator-none"
                >
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

export default ListaProdutos;