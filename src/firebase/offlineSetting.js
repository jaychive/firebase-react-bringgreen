import { enableIndexedDbPersistence } from 'firebase/firestore';
import React from 'react';
import { db } from './Firebase-config';

function offlineSetting(props) {
  enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
}

export default offlineSetting;