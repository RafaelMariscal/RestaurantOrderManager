import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 480px;
  padding: 2rem ;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size: 1.5rem;
    }

    button{
      line-height: 0;
      border: 0;
      background-color: transparent;
    }
  }

  .status-container{
    margin-top: 2rem;

    small{
      font-size: .875rem;
      opacity: 0.8;
    }

    div{
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: .5rem;
    }
  }
`;

export const OderDetails = styled.div`
  margin-top: 2rem;

  > strong{
     font-weight: 500;
     font-size: .875rem;
     opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;

    .item{
      display: flex;
      align-items: center;
      & + .item{
        margin-top: 1rem;
      }

      img{
        width: 3rem;
        height: 2.5rem;
        object-fit: cover;
        border-radius: .375rem;
      }

      .quantity{
        align-self: self-start;
        font-size: .875rem;
        color:#666;
        display: block;
        min-width: 1.25rem;
        margin-left: .75rem ;
      }

      .product-details{
        margin-left: .25rem;

        strong{
          display:block;
          margin-bottom: .25rem;
        }

        span{
          font-size: .875rem;
          color: #666;
        }
      }

    }
  }
  .total{
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;

    span{
      font-size: .875rem;
      opacity: 0.8
    }
  }
`;
