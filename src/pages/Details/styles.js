import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;


  @media (min-width: 700px){
  
    display: grid;
    grid-template-rows: 5rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
      width: 100%;
      max-width: 1137px;

      margin: 40px auto;
      

      grid-area: content;
      overflow-y: auto;
      padding: 3.4rem 1rem;

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 0.5rem;
      }
    }


    > main::-webkit-scrollbar {
      width: 8px;
    
    }
    
    > main::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    
    }
  }
`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;

  .back {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .title {
    margin-top: 2rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-self: center;
    gap: 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  > button:first-child {
    align-self: start;
  }

  > h1 {
    font-weight: 500;
    padding-top: 2rem;
  }

  > p {
    font-size: 16px;
    margin-top: 1rem;
    margin-bottom: 3rem;

    text-align: justify;
  }

  @media (max-width: 924px){
    display: flex;
    align-items: center;

    .back {
      margin-top: 1rem;
      gap: 0.2rem;
      > svg {
        margin-top: 1rem;
      }
    }

    .title {
      display: flex;
      flex-direction: column;

      > h1 {
        font-size: 1.8rem;
        font-weight: 500;
        padding-top: 2rem;
      }
    }

  }
`;

export const Writer = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1.2rem;

> .writer {
    display: flex;
    align-items: center;
    
    width: 1rem;
    height: 1rem;

    border-radius: 50%;
  }

  > img {
    margin-right: 0.5rem;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.5rem;

    margin-left: 1rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 700px){
    .writer {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Tags = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;

  display: flex;
  gap: 0.5rem;
`;

export const ButtonDelete = styled.button`
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

  color: ${({ theme }) => theme.COLORS.PINK};

  height: 3rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 10px;

  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;