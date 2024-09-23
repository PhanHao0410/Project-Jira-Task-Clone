import React, { useState } from 'react';
import { Data, Status } from '../../types/Requests';

export const useDragAndDrop = (initialState: Data[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>(initialState);

  const handleUpdateList = (id: number, status: Status) => {
    const card = listItems.find((item) => item.id === id);

    if (card && card.status !== status) {
      card.status = status;
      if (Array.isArray(listItems)) {
        setListItems((prev) => [
          card!,
          ...prev.filter((item) => item.id !== id),
        ]);
      }
    }
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    listItems,
    handleUpdateList,
    handleDragging,
  };
};
