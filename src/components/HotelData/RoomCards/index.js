import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import RoomCard from './RoomCard';
import BookRoomButon from './BookRoomButon';

export default function RoomCards({ booked }) {
  const [chosen, setChosen] = useState(null);
  const rooms = [
    {
      'id': 13,
      'name': 'Single',
      'capacity': 1,
      'hotelId': 3,
      'createdAt': '2023-03-08T22:01:54.869Z',
      'updatedAt': '2023-03-08T22:01:54.869Z'
    },
    {
      'id': 14,
      'name': 'Doble',
      'capacity': 2,
      'hotelId': 3,
      'createdAt': '2023-03-08T22:01:54.870Z',
      'updatedAt': '2023-03-08T22:01:54.870Z'
    },
    {
      'id': 15,
      'name': 'Triple',
      'capacity': 3,
      'hotelId': 3,
      'createdAt': '2023-03-08T22:01:54.871Z',
      'updatedAt': '2023-03-08T22:01:54.872Z'
    }
  ];

  const display = {
    true: <BookRoomButon roomData={chosen}  booked={booked}/>,
    null: '',
  };

  if (rooms.length === 0) {
    return (
      <Rooms>
        <StyledTypography alignitems="center" variant="body1" color="textSecondary" align="center">
          {'carregando Tickets'}
        </StyledTypography>
      </Rooms>
    );
  } else {
    return (
      <>
        <Rooms>
          {rooms.map((item) => (
            <RoomCard key={item.id} item={item} chosen={chosen} setChosen={setChosen}/>
          ))}
        </Rooms>
        {display[chosen !== null]}
      </>
    );
  }
}

const StyledTypography = styled(Typography)`
  line-height: 1 !important;
`;

const Rooms = styled(Box)`
  display: flex;

  margin-top: 17px;
  margin-bottom: 46px;
`;
