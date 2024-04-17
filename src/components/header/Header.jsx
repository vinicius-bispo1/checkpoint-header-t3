import { Link } from "react-router-dom";
import * as S from "./styled"
import linkedin from "../../assets/link.png"
import git from "../../assets/git.png"
import face from "../../assets/face.png"

export default function Header() {
  return (
    <S.Header>
        <S.BoxLogo>
          <img src="https://labes.inf.ufes.br/wp-content/uploads/sem-foto.jpg" alt="" />
          <S.Title>Thales</S.Title>
          <S.Text>Front-end Developer</S.Text>
        </S.BoxLogo>
        <S.BoxMenu>
            <ul>
                <S.Lista><Link  to="/">Inicio</Link></S.Lista>
                <S.Lista><Link to="/sobre">Sobre mim</Link></S.Lista>
                <S.Lista><Link to="/projetos">Projetos</Link></S.Lista>
            </ul>
        </S.BoxMenu>
        <S.BoxIcon>
          <a href=""><img src={linkedin} alt="" /></a>
          <a href=""><img src={git} alt="" /></a>
          <a href=""><img src={face} alt="" /></a>
        </S.BoxIcon>
    </S.Header>
  )
}
