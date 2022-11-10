import styled from "styled-components";

export const Container = styled.div`
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }

  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .banner {
    height: 230px;
    overflow-y: hidden;
  }

  .banner img {
    width: 100%;
  }
`;
