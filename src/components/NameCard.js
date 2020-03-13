import React, {useContext, useReducer} from 'react';
import selfie from '../img/Selfie.jpg';
import {theme, ThemeContext} from "../theme-context";

const NameCard = (props) => {
  const theme = useContext(ThemeContext);
  const {state, dispatch} = props;
  console.log(state);
  return (
    <div className="align-self-center d-flex flex-column justify-content-center align-items-center col-md-3">
      <img src={selfie} alt='selfie' style={{width: 160, height: 250}} className='img-thumbnail d-block'/>
      <h4 className="alert-heading">{state.get('name')}</h4>
      <ul className='pl-0' style={{width: 'fit-content', listStyleType: 'none'}}>
        <li>{theme.phone}{state.get('phone')} </li>
        <li>{state.get('category')}</li>
      </ul>
      {/*<hr style={{width:'100%'}}/>*/}
      <p>
        {theme.tags.map((tags, index) => (
          <span className="badge badge-pill badge-info mr-1" key={index}>{tags}</span>)
        )}
      </p>
    </div>
  )
}
/* class NameCard extends React.Component {
    render() {
        const { name, number, isHuman, tags } = this.props;
        return (
            <div className="alert alert-success">
                <h4 className="alert-heading">{name}</h4>
                <ul>
                    <li> Phone：{number} </li>
                    <li>{ isHuman ? 'Human' : 'Aliens' }</li>
                    <hr />
                    <p>
                        {tags.map((tags,index)=> (
                            <span className="badge badge-pill badge-primary" key={index}>{tags}</span>)
                        )}
                    </p>
                </ul>
            </div>
        )
    }
} */

export default NameCard