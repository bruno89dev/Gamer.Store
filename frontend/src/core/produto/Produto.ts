import Especificacoes from './Especificacoes';
import PrecoInfo from './PrecoInfo';

export default interface Produto extends PrecoInfo {
  id: number;
  nome: string;
  descricao: string;
  marca: string;
  modelo: string;
  imagem: string;
  videoReview: string;
  nota: number;
  tags: string[];
  especificacoes: Especificacoes;
}
