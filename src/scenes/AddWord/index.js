import React from 'react';
import { connect } from 'react-redux';

import NewWordForm from './components/NewWordForm';
import UploadPhotoForm from './components/UploadPhotoForm';
import { openManualTab, openPhotoTab } from '../../services/ui/actions';

import styles from './style.css';

const AddWord = ({ usePhoto, openManual, openPhoto }) => (
  <div className={styles.addWordPage}>
    <div className={usePhoto ? styles.bigCont : styles.smallCont}>
      <div className={styles.tabCont}>
        <button
          className={[styles.tab, usePhoto ? styles.passiveTab : styles.activeTabLeft].join(' ')}
          onClick={() => openManual()}
        >add manually</button>
        <button
          className={[styles.tab, usePhoto ? styles.activeTabRight : styles.passiveTab].join(' ')}
          onClick={() => openPhoto()}
        >from a photo</button>
      </div>
      <div className={[styles.tabBottomShadow, usePhoto ? null : styles.bottomShadowRight].join(' ')} />
      <div className={styles.formCont}>
        { !usePhoto && <NewWordForm /> }
        { usePhoto && <UploadPhotoForm /> }
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  usePhoto: state.ui.photoTabOpen,
});

const mapDispatchToProps = dispatch => ({
  openManual: () => dispatch(openManualTab()),
  openPhoto: () => dispatch(openPhotoTab()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWord);
