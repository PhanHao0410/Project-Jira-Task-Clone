import React from 'react';

import { UILoadingContainer, UiLoadingContent } from './Styles';

const UILoading = () => {
  return (
    <UILoadingContainer>
      <UiLoadingContent>
        <div className="box-item" />
        <div className="box-item" />
        <div className="box-item" />
        <div className="box-item" />
        <div className="box-item" />
      </UiLoadingContent>
    </UILoadingContainer>
  );
};

export default UILoading;
