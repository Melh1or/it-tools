import React, {useEffect, useRef, useState} from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import useDebounce from '../../hooks/useDebounce'
import {searchLogs} from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const [text, setText] = useState('')
  const debouncedSearchTerm = useDebounce(text, 1000);
  useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === '') {
      searchLogs(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  return (
    <nav style={{ marginBottom: 30 }} className={'blue'}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search logs" value={text} onChange={e => setText(e.target.value)} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(SearchBar)