import React from 'react';

import styles from './cssModules/modeSelector.module.css';

const ModeSelector = ({setShowGallery, setShowCreateMode}) => {
  return (
    <div id={styles['widget']}>
      <h1 className={styles['title']}>LED Canvas</h1>
      <div className={styles['rgb-line']}></div>
      <div className={styles['rgb-line']} id={styles['bottom']}></div>
      <div id={styles['main-button-container']}>
        <button id={styles['create-button']} onClick={() => setShowCreateMode(true)}>
          Create
          <img className={styles['icons']} src='./icons/create-icon.png'/>
        </button>
        <button id={styles['gallery-button']} onClick={() => setShowGallery(true)}>
          Gallery
          <img className={styles['icons']} style={{transform: 'translateY(3px)'}} src='./icons/animation-icon.png'></img>
        </button>
      </div>
      <div id={styles['misc-modes']}>
        <button>Rain Mode</button>
        <button>Audio Visualizer</button>
      </div>
    </div>
  );
};

export default ModeSelector;