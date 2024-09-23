import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import { WordEmbedContain } from './styles';

const WordEmbed = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  return (
    <WordEmbedContain>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </WordEmbedContain>
  );
};

export default WordEmbed;
