import React, {Fragment, useEffect, useReducer, useState} from 'react';
import {ThemeContext, theme} from "../theme-context";
import NameCard from '../components/NameCard';
import LikesButton from '../components/LikesButton';
import DigitalClock from '../components/DigitalClock';
import CommentBox from '../components/CommentBox';
import CommentLists from '../components/CommentLists';
import Bg from '../img/bg4.jpg';
// import {initState, reducer} from "../store/reducer";
import axios from 'axios';
import {initialState, reducer} from "../store/reducer";
import {fromJS} from 'immutable';

const EnglishVersion = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [locale, setLocale] = useState(theme.en);

  return (
    <Fragment>
      <div
        className="row w-100 h ml-0 mb-0 pt-3">
        <ThemeContext.Provider value={locale}>
          <NameCard state={state} dispatch={dispatch}/>
          <div className='d-flex flex-column justify-content-between col-md-6'>
            <CommentLists
              state={state}
              dispatch={dispatch}
            />
            <CommentBox
              state={state}
              dispatch={dispatch}
            />
          </div>
          <DigitalClock/>
          {/*<LikesButton/>*/}
        </ThemeContext.Provider>
      </div>
    </Fragment>
  );
};

export default EnglishVersion;