import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    .buttonSignUp {
      margin-top: 24px;
    }
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  
  > h2 {
    margin: 48px 0;

    font-size: 24px;
    font-weight: 500;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-top: 124px;
  }  
`;

//Change image
export const Background = styled.div`
  flex: 1;
  background: url(https://www.estudarfora.org.br/wp-content/uploads/2021/03/notas.jpg) no-repeat center center;
  background-size: cover;
  opacity: 0.3;
`;