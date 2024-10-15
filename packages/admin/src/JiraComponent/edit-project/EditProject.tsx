import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AppBar from '../../components/AppBar';
import history from '../../utils/history';
import path from '../../constants/clientPath';
import { useStoreMobx } from '../../mobx/hook';
import {
  EditProjectContain,
  EditProjectContent,
  FormInputContain,
  DescriptionContain,
  CreateAction,
  DialogShowErrorUpdate,
  DialogShowSuccessUpdate,
} from './styles';

interface IEditProject {
  projectName: string;
}

const EditProject = () => {
  const idUser = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IEditProject>();
  const {
    rootStore: { projectDetailStore },
  } = useStoreMobx();
  const dataProjectDetail = projectDetailStore.getDataProjectDetail;
  const errorUpdateProject = projectDetailStore.getErrorUpdateProject;
  const dataUpdateProject = projectDetailStore.getDataUpdateProject;
  const [projectCategory, setProjectCategory] = React.useState('');
  const [valueProject, setValueProject] = useState('');
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  useEffect(() => {
    if (idUser?.codeProject) {
      const id = idUser?.codeProject;
      projectDetailStore.fetchProjectDetail(id);
    }
  }, [idUser, dataUpdateProject]);

  useEffect(() => {
    if (errorUpdateProject?.content) {
      setOpenError(true);
    }
    if (dataUpdateProject?.content) {
      setOpenSuccess(true);
    }
  }, [errorUpdateProject, dataUpdateProject]);

  useEffect(() => {
    if (dataProjectDetail?.projectName) {
      setValue('projectName', dataProjectDetail?.projectName);
      setProjectCategory(dataProjectDetail?.projectCategory.id);
      setEditorState(() =>
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(dataProjectDetail?.description),
          ),
        ),
      );
    }
  }, [dataProjectDetail]);

  const handleChange = (event: SelectChangeEvent) => {
    setProjectCategory(event.target.value);
  };

  const handleSubmitUpdateProject = (data) => {
    const projectId = idUser?.codeProject;
    const projectName = data.projectName;
    const categoryId = projectCategory;
    const description = convertToHTML(editorState.getCurrentContent());
    const dataPayload = {
      ...dataProjectDetail,
      description: description,
      categoryId: categoryId,
      projectName: projectName,
      creator: dataProjectDetail?.creator.id,
    };
    projectDetailStore.fetchUpdateProject({ projectId, dataPayload });
  };

  const handleCloseDialogShowError = () => {
    setOpenError(false);
    projectDetailStore.setResetStateUpdateProject();
  };

  const handleCloseDialogSuccess = () => {
    setOpenSuccess(false);
    projectDetailStore.setResetStateUpdateProject();
  };
  return (
    <>
      <AppBar />
      <EditProjectContain>
        <EditProjectContent>
          <div className="title-select">
            <span
              onClick={() => history.push(path.PROJECTS)}
              role="presentation"
            >
              Projects /
            </span>
            <span
              onClick={() =>
                history.push(`/projec/${idUser?.codeProject}/board`)
              }
              role="presentation"
            >
              {dataProjectDetail?.projectName} /
            </span>
            New project
          </div>
          <h3 className="title-main">Update Project</h3>
          <form onSubmit={handleSubmit(handleSubmitUpdateProject)}>
            <FormInputContain className="input-disable-contain">
              <div className="title-input">
                Project ID <span>*</span>
              </div>
              <input value={dataProjectDetail?.id} disabled />
            </FormInputContain>
            <FormInputContain>
              <div className="title-input">
                Project name <span>*</span>
              </div>
              <input
                className={errors?.projectName?.message ? 'input-err' : ''}
                {...register('projectName', {
                  required: 'Project name is required',
                })}
              />
              {errors?.projectName?.message && (
                <p className="show-error">{errors?.projectName?.message}</p>
              )}
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
                  <MenuItem value={1}>Dự án Web</MenuItem>
                  <MenuItem value={2}>Dự án phần mềm</MenuItem>
                  <MenuItem value={3}>Dự án di động</MenuItem>
                </Select>
              </FormControl>
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
                Update
              </Button>
            </CreateAction>
          </form>
        </EditProjectContent>
      </EditProjectContain>
      <DialogShowErrorUpdate
        open={openError}
        onClose={handleCloseDialogShowError}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: '30%',
            minWidth: '380px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <div className="x-mark-contain">
            <span className="x-mark-item x-mark-left" />
            <span className="x-mark-item x-mark-right" />
          </div>
        </DialogTitle>
        <DialogContent id="dialog-content">
          <h3>Awwww!</h3>
          <p>Project failed to be updated!!!</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialogShowError}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogShowErrorUpdate>
      <DialogShowSuccessUpdate
        open={openSuccess}
        onClose={handleCloseDialogSuccess}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: '30%',
            minWidth: '380px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          <div className="x-mark-contain">
            <span className="x-mark-item x-mark-left" />
            <span className="x-mark-item x-mark-right" />
          </div>
        </DialogTitle>
        <DialogContent id="dialog-content">
          <h3>Project updated successfully!</h3>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialogSuccess}
            autoFocus
            className="btn-dialog"
          >
            ok
          </Button>
        </DialogActions>
      </DialogShowSuccessUpdate>
    </>
  );
};

export default observer(EditProject);
