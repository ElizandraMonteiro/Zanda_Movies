import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import  moment  from 'moment-timezone';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { FiClock, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Writer, Tags, ButtonDelete } from "./styles.js";
import { Header } from "../../components/Header";

import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";



export function Details(){
  const [ data, setData ] = useState({});

  const params = useParams();

  const { user } = useAuth();
 
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  useEffect(() => {
    async function fetMovie(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);

    }

    fetMovie();
  }, []);

  const momentDate = moment.utc(data.updated_at).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');

  const navigate = useNavigate();
  
  function handleBack() {
		navigate(-1);
	}

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  return(
    <Container>

      <Header />
      {     
        data && 
          <main>
              <Content>
                <div className="back">
                  <FiArrowLeft />
                  <ButtonText 
                    onClick={handleBack} 
                    className="back" 
                    title="Voltar" 
                  />
                </div>  

                <div className="title">
                  <h1>{data.title}</h1>
                  <Rating note={data.rating} noteEmpty/>
                </div>

                <Writer>
                  <img 
                    className="writer"
                    src={avatarUrl}
                    alt={user.name}
                  />

                  <p>Por {user.name}</p>
                  <FiClock/>
                  <p>{momentDate}</p>
                </Writer>

                <p>
                  {data.description}
                </p>

                { data.tags && 
                  <Section>
                    <Tags>
                      {
                        data.tags.map(tag => (
                          <Tag 
                            key={String(tag.id)}
                            title={tag.name}
                          />
                        ))
                      }
                    </Tags>
                  </Section>
                }

            <ButtonDelete onClick={handleRemove}>
              Excluir filme
            </ButtonDelete>

              </Content>
          </main>
      }

    </Container> 
  );
}