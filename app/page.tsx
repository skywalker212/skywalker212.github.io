'use client'

import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Terminal from '../components/Terminal/Terminal';
import IntroAnimation from '../components/IntroAnimation/IntroAnimation';
import { INTRO_TEXT, USER, HOST } from '../helpers/consts';

import AkaSH from '../model/os';

export default function Page() {
  const os = new AkaSH();
  const [displayIntroAnimation, setDisplayIntroAnimaion] = useState(false);

  const beginFadeOutAfter = 3000;
  const fadeOutTime = 1000;
  const hideAnimationAfter = beginFadeOutAfter + fadeOutTime;

  useEffect(() => {
    setTimeout(() => {
      setDisplayIntroAnimaion(false);
    }, hideAnimationAfter);
  },[displayIntroAnimation, hideAnimationAfter]);

  const commandHandler = async (command) => os.cmd(command);

  return (
    <div className={styles.container}>
      <div>
        { displayIntroAnimation && <IntroAnimation fadeOutAfter={beginFadeOutAfter} /> }
        { !displayIntroAnimation &&  
          <Terminal
            height='100vh'
            user={USER}
            host={HOST}
            commandHandler={commandHandler}
            introText={INTRO_TEXT} />
          }
      </div>
    </div>
  )
}
