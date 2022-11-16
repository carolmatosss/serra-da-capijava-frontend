import Categoria from './Categoria'

interface Produtos{
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    tamanho: string;
    quantidade: number;
    
    categoria?: Categoria | null
}

export default Produtos;