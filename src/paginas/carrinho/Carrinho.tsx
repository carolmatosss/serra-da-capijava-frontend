import  { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "../../Components/produtos/listaProdutos/ListaProdutos.css";
import Produtos from "../../model/Produtos";


function Carrinho(){
    const [produtos, setProdutos] = useState<Produtos[]>([]);
    const [total, setTotal] = useState(0);

    function buscarCarrinho(){
        const itensGravados = localStorage.getItem('carrinho');
        const itens = itensGravados !== null ? itensGravados : '';
        

        if(itens !== ''){             
            const itensCarrinho = JSON.parse(itens);

            gravaProduto(itensCarrinho);
            
            calcularValorTotal();
        }
    } 

    function calcularValorTotal(){
        var valorTotal = 0;
        produtos.map((produto, index) => {
            var valorItem = produto.preco * produto.quantidade;
            valorTotal +=valorItem;
        });
        setTotal(valorTotal);
    }

    function adicionarItem(produto: Produtos) {
        let novaListaProdutos = produtos.filter(p => p.id !== produto.id);
        
        produto.quantidade += 1;

        novaListaProdutos.push(produto);
        
        localStorage.setItem('carrinho', JSON.stringify(novaListaProdutos));

        gravaProduto(novaListaProdutos);
        calcularValorTotal();
    }

    function gravaProduto(produtos: any){
     produtos.sort((a:any, b:any) => (a.id > b.id) ? 1 : -1);
      setProdutos(produtos);
    }
        
    function removerItem(produto: Produtos) {
        let novaListaProdutos = produtos.filter(p => p.id !== produto.id);
        
        produto.quantidade -= 1;

        if(produto.quantidade > 0){
            novaListaProdutos.push(produto);
        }

        localStorage.setItem('carrinho', JSON.stringify(novaListaProdutos));

        gravaProduto(novaListaProdutos);
        calcularValorTotal();
    }

    function excluirItem(id:number) {
        const novaListaProdutos = produtos.filter(p => p.id !== id);
        localStorage.setItem('carrinho', JSON.stringify(novaListaProdutos));

        gravaProduto(novaListaProdutos);
    }

    useEffect(() => {
        buscarCarrinho();
      },[]);
    

    return(
    <>
      <Box>
    
    {produtos.length === 0 && <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>}
       
    {produtos.map((produtos, index) => (
        <Box alignSelf="flex-start" >
          <Card variant="outlined" className="produtos">
            <CardContent>
              
              <Typography variant="h5" component="h2">
                {produtos.nome}
              </Typography>

              <Typography variant="body2" component="p">
                Preço R$: {produtos.preco}
              </Typography>

              <Typography variant="body2" component="p">
                Quantidade: {produtos.quantidade}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>    
                <Box mx={1}>
                    <Button onClick={() => adicionarItem(produtos)} variant="contained" size='small' color="secondary" className="btnDeletar">
                          adicionar um item
                        </Button>
                  </Box> 
                  <Box mx={1}>
                    <Button onClick={() => removerItem(produtos)} variant="contained" size='small' color="secondary" className="btnDeletar">
                          remover um item
                        </Button>
                  </Box>                             
                  <Box mx={1}>
                    <Button onClick={() => excluirItem(produtos.id)} variant="contained" size='small' color="secondary" className="btnDeletar">
                          excluir do carrinho
                        </Button>
                  </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
       ))}
       <Typography variant="h5" component="h2">
            Total da compra R$: {total}
        </Typography>
        <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary" className="btnDeletar">
                          Prosseguir com a compra
                        </Button>
                  </Box>
        
    </Box>
    </>)
}

export default Carrinho;