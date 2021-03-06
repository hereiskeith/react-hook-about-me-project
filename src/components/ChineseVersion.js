import React, {Fragment, useEffect, useReducer, useState} from 'react';
import {ThemeContext, theme} from "../theme-context";
import NameCard from '../components/NameCard';
import LikesButton from '../components/LikesButton';
import DigitalClock from '../components/DigitalClock';
import CommentBox from '../components/CommentBox';
import CommentLists from '../components/CommentLists';
import Bg from '../img/bg4.jpg';
import {initialState, reducer} from "../store/reducer";


const ChineseVersion = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const [locale, setLocale] = useState(theme.zh);
  const [changeTimes, setChangeTimes] = useState(0);
  const handleChange = () => {
    setChangeTimes(changeTimes + 1)
  };

  return (
    <Fragment>
      <div key={changeTimes}
           className="row w-100 h ml-0 mb-0 pt-3">
        <ThemeContext.Provider value={locale}>
          <NameCard state={state} dispatch={dispatch}/>
          <div className='d-flex flex-column justify-content-between col-md-6'>
            <CommentLists
              state={state}
              dispatch={dispatch}
              // onHandleDelete={handleDelete}
            />
            <CommentBox
              state={state}
              dispatch={dispatch}
              onProfileChange={handleChange}
            />
          </div>
          <DigitalClock/>
          {/*<LikesButton/>*/}
        </ThemeContext.Provider>
      </div>
    </Fragment>
  );
};

export default ChineseVersion;