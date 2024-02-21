import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }

  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 40px;
  font-weight: 500;

  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Function = styled.span`
  color: lightgray;
  margin-bottom: 10px;
`;

export const Intro = styled.span`
  color: lightgray;
  text-align: justify;
  margin-bottom: 15px;

  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;

  svg {
    font-size: 20px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 100%;
    width: 100%;
    height: auto;
    max-width: 90%;

    @media (max-width: 768px) {
      max-width: 20rem;
    }

    @media (max-width: 600px) {
      max-width: 15rem;
    }
  }
`;

export const Img = styled.img``;

export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;

  Img {
    width: 3rem;
    height: 3rem;
    margin: 0.3rem;
  }
`;
