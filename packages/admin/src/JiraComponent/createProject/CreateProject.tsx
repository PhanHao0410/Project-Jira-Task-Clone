import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import AppBar from '../../components/AppBar';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import {
  CreateProjectContain,
  CreateProjectContent,
  FormInputContain,
  DescriptionContain,
  CreateAction,
} from './styles';

const CreateProject = () => {
  const [projectCategory, setProjectCategory] = React.useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const handleChange = (event: SelectChangeEvent) => {
    setProjectCategory(event.target.value);
  };
  return (
    <>
      <AppBar />
      <CreateProjectContain>
        <CreateProjectContent>
          <div className="title-select">
            <span
              onClick={() => history.push(path.PROJECTS)}
              role="presentation"
            >
              Projects
            </span>
            / New project
          </div>
          <h3 className="title-main">New project</h3>
          <FormInputContain>
            <div className="title-input">
              Project name <span>*</span>
            </div>
            <input />
          </FormInputContain>
          <FormInputContain>
            <div className="title-input">
              Project category <span>*</span>
            </div>
            <FormControl sx={{ minWidth: 120, width: '100%' }}>
              <Select
                value={projectCategory}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="">
                  <p>Select a project category</p>
                </MenuItem>
                <MenuItem value={10}>Dự án Web</MenuItem>
                <MenuItem value={20}>Dự án phần mềm</MenuItem>
                <MenuItem value={30}>Dự án di động</MenuItem>
              </Select>
            </FormControl>
          </FormInputContain>
          <DescriptionContain>
            <h5>Descriptions</h5>
            <div className="description-content">
              <Editor
                defaultEditorState={editorState}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
          </DescriptionContain>
          <CreateAction>
            <Button className="btn btn-cancel">Cancel</Button>
            <Button className="btn btn-create">Create</Button>
          </CreateAction>
        </CreateProjectContent>
      </CreateProjectContain>
    </>
  );
};

export default CreateProject;
