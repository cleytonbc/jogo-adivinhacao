import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vw;
`;

export const Main = styled.main`
  display: flex;
  padding: 40px 0px 0px 0px;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    width: 500px;
    height: 300px;
    background-color: #efefef;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    flex-direction: column;

    p {
      text-align: center;
      font-size: 40px;
      width: 300px;
      font-weight: 700;

      span {
        color: #fca311;
      }
    }

    footer {
      margin-bottom: 0;
    }
  }

  @media (max-width: 400px) {
    padding: 30px 0px;
    section {
      width: 380px;
      height: 320px;
    }
  }
`;

export const Buttons = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
