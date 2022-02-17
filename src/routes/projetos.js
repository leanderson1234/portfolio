import {datas} from '../data'
import styled from 'styled-components';

const ContentMain = styled.main`
 height: 100vh;
 display:flex;
 flex-wrap: wrap;
 
`

const Projeto = styled.div`
  border: #f5f5f5 solid 1.5px;
  width: 320px;
  height: 320px;
  border-radius: 24px;
  margin-top: 24px;
  margin-right: 24px;
  display:flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;

  :hover{
    background:#FF7F3F;
    transition: ease 0.5s;
    h2{
      opacity: 1; 
      transition: ease 1s;
    }
    img{
      opacity:0.1;
      transition: ease 1s;
    }
    a{
      opacity: 1;
      transition: ease 1s;
    }
  }

`
const ProjetoTitle = styled.h2`
  position: absolute;
  color:#082032;
  opacity: 0;
`

const ImagemProjeto = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
`

const ProjetoButton = styled.a`
  position: absolute;
  bottom: 20%;
  text-decoration: none;
  color: #fff;
  padding: 10px;
  width: 150px;
  background: #082032;
  border-radius: 25px;
  text-align: center;
  opacity: 0;

  :hover{
    background: #fff;
    color: #082032;
    transition: ease 1s;
  }
`
const Projetos = ({type})=>{
  return(
  <ContentMain>
            {datas.filter(e => type == e.type).map(
             projects =>{
              if(type == 'web'){
                return(
                  <Projeto key={projects.id}>
                    <span>{projects.type}</span>
                    <ImagemProjeto src={projects.image} alt={projects.alt} />
                    <ProjetoTitle>{projects.title}</ProjetoTitle>
                    <ProjetoButton href={projects.url} target="_blank">Abrir site</ProjetoButton>
                  </Projeto>
                )
              }
              if(type == 'mobile'){
                return(
                  <Projeto key={projects.id}>
                    <span>{projects.type}</span>
                    <ImagemProjeto src={projects.image} alt={projects.alt} />
                    <ProjetoTitle>{projects.title}</ProjetoTitle>
                    <ProjetoButton href={projects.url} target="_blank">Abrir site</ProjetoButton>
                  </Projeto>
                )
              }
            } 
            )}
        </ContentMain>

  )
}
export default Projetos