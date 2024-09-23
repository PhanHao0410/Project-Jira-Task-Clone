import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import AppBar from '../../components/AppBar';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import { CreateProjectForm } from '../../types/Requests';
import { useStoreMobx } from '../../mobx/hook';
import {
  CreateProjectContain,
  CreateProjectContent,
  FormInputContain,
  DescriptionContain,
  CreateAction,
} from './styles';

const CreateProject = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateProjectForm>();

  const {
    rootStore: { createProjectStore },
  } = useStoreMobx();

  const [projectCategory, setProjectCategory] =
    React.useState<number>(undefined);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  const handleChange = (event: SelectChangeEvent) => {
    setProjectCategory(Number(event.target.value));
  };

  const handleCreatProject = (data) => {
    const textDrescriptions = convertToHTML(editorState.getCurrentContent());
    const categoryId: number = data.categoryId;
    const projectName: string = data.projectName;
    createProjectStore.fetchCreateProject({
      textDrescriptions,
      categoryId,
      projectName,
    });
  };

  return (
    <>
      <AppBar />
      <CreateProjectContain>
        <CreateProjectContent>
          <form onSubmit={handleSubmit(handleCreatProject)}>
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
              <input
                className={errors.projectName?.message ? 'input-error' : ''}
                {...register('projectName', {
                  required: 'Project name is required',
                })}
              />
              <p className="show-error">{errors.projectName?.message}</p>
            </FormInputContain>
            <FormInputContain>
              <div className="title-input">
                Project category <span>*</span>
              </div>
              <FormControl sx={{ minWidth: 120, width: '100%' }}>
                <Select
                  className={errors.categoryId?.message ? 'input-error' : ''}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  {...register('categoryId', {
                    required: 'Project category is required',
                    value: projectCategory,
                  })}
                >
                  <MenuItem value={undefined}>
                    <p>Select a project category</p>
                  </MenuItem>
                  <MenuItem value={1}>Dự án Web</MenuItem>
                  <MenuItem value={2}>Dự án phần mềm</MenuItem>
                  <MenuItem value={3}>Dự án di động</MenuItem>
                </Select>
              </FormControl>
              <p className="show-error">{errors.categoryId?.message}</p>
            </FormInputContain>
            <DescriptionContain>
              <h5>Descriptions</h5>
              <div className="description-content">
                <Editor
                  editorState={editorState}
                  onEditorStateChange={setEditorState}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
              </div>
            </DescriptionContain>
            <CreateAction>
              <Button className="btn btn-cancel">Cancel</Button>
              <Button className="btn btn-create" type="submit">
                Create
              </Button>
            </CreateAction>
          </form>
        </CreateProjectContent>
      </CreateProjectContain>
    </>
  );
};

export default observer(CreateProject);
