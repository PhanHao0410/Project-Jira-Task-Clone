import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CardItem from './CardItem';
import { Data, Status } from '../../types/Requests';
import { CardContain } from './styles';

interface Props {
  items;
  status: Status;
  isDragging: boolean;
  handleUpdateList: (id: number, status: Status) => void;
  handleDragging: (dragging: boolean) => void;
}

export const ContainerCards = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData('text'), status);
    handleDragging(false);
  };

  // console.log('check daata: ', items);
  // console.log('check status: ', status);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <CardContain onDrop={handleDrop} onDragOver={handleDragOver}>
      {(status === '1' && (
        <p className="title-task title-backlog">backlog</p>
      )) ||
        (status === '2' && (
          <p className="title-task title-selected">selected for development</p>
        )) ||
        (status === '3' && (
          <p className="title-task title-progress">in progress</p>
        )) ||
        (status === '4' && <p className="title-task title-done">done</p>)}
      {items.map((item) => (
        <>
          <CardItem
            data={item}
            key={item.taskId}
            handleDragging={handleDragging}
            isDragging={isDragging}
          />
        </>
      ))}
      {status === '1' && (
        <div className="add-task">
          <AddIcon />
          <p>Create</p>
        </div>
      )}
    </CardContain>
  );
};
