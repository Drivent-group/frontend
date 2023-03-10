import styled from 'styled-components';
import useHotelRooms from '../../../hooks/api/useHotelRooms';

export default async function HotelRooms(props) {
  /* const { id, user } = props;
  const room =  useHotelRooms(user, id);
 */
  /* console.log(room); */

  /* if (room) {
    return (
      <>
        <GrandLetter>{room.name}</GrandLetter>
        <BoldLetter>Tipos de Acomodação:</BoldLetter>
        <NormalLetter>
          {rooms.Rooms.map((room) => {
            return(
              `${room.name}, ` 
            );
          })}
        </NormalLetter>
        <BoldLetter>Vagas Disponíveis:</BoldLetter>
        <NormalLetter>103</NormalLetter>
      </>
    );
  } */
  return(
    <BoldLetter>Carregando quartos</BoldLetter>
  );
}
const BoldLetter = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
margin-bottom: 5px;
`;

const GrandLetter = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #343434;
margin-bottom: 10px;
`;

const NormalLetter = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
margin-bottom: 14px;
`;
