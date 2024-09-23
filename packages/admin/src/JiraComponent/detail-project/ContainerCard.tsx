import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CardItem from './CardItem';
import { Data, Status } from '../../types/Requests';
import { CardContain } from './styles';

interface Props {
  items: Data[];
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <CardContain onDrop={handleDrop} onDragOver={handleDragOver}>
      {(status === 'backlog' && (
        <p className="title-task title-backlog">backlog</p>
      )) ||
        (status === 'selected' && (
          <p className="title-task title-selected">selected for development</p>
        )) ||
        (status === 'progress' && (
          <p className="title-task title-progress">in progress</p>
        )) ||
        (status === 'done' && <p className="title-task title-done">done</p>)}
      {items.map(
        (item) =>
          status === item.status && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
              isDragging={isDragging}
            />
          ),
      )}
      {status === 'backlog' && (
        <div className="add-task">
          <AddIcon />
          <p>Create</p>
        </div>
      )}
    </CardContain>
  );
};
