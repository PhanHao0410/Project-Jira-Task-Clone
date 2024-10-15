import React, { useState } from 'react';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import { WordEmbedContain } from './styles';

const WordEmbed = ({ textEditor }) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(textEditor)),
    ),
  );
  return (
    <WordEmbedContain>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </WordEmbedContain>
  );
};

export default WordEmbed;
