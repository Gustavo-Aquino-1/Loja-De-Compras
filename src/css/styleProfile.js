import styled from "styled-components";

export const ProfileArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
border: 2px solid #56555561;
border-radius: 10px;
padding: 30px;
width: 30%;
margin: auto;

img {
  width: 250px;
}

button {
  margin-top: 20px;
  padding: 10px 40px;
  border: 2px solid red;
  color: red;
  font-weight: 800;
  background-color: white;
  &:hover {
    background-color: red;
    color: white;
    cursor: pointer;
  }
}
`;