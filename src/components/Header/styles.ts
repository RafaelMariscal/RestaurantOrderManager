import styled from "styled-components";

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
  padding: 0 1rem
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .page-details {
    h1{
      color: #fff;
      font-size: 2rem ;
    }

    h2{
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: .375rem
    }
  }
`;
