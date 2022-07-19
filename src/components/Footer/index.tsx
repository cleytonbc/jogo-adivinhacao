import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  return (
    <Container>
      Desenvolvido por Cleyton ©️ 2022
      <span>
        <a href="http://github.com/cleytonbc" target="_blank"> <AiFillGithub size={20}/></a>
      </span>

      <span>
        <a href="https://br.linkedin.com/in/cleytonbc/" target="_blank"><AiFillLinkedin size={20}/></a>
      </span> 
    </Container>
  );
}