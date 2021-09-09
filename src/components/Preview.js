import React, { useEffect } from 'react';
import '../styles/Preview.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectCameraImage, resetCameraImage } from '../features/cameraSlice';
import { useHistory } from 'react-router';
import CloseIcon from '@material-ui/icons/Close';

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImage) {
      history.replace('/');
    }
  }, [cameraImage, history]);

  const closePreview = () => {
    dispatch(resetCameraImage());
    history.replace('/')
  }

  return (
    <div className='preview'>
      <CloseIcon onClick={closePreview} className='preview__close'/>
      <img src={cameraImage} alt='' />
    </div>
  );
};

export default Preview;
