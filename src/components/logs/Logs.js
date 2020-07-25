import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LogItem from "./LogItem";
import Loader from "../layout/Loader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ getLogs, loading, logs}) => {
  useEffect(() => {
    getLogs()
  }, [])

  if(loading) return <Loader />

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>

      {
        !loading && logs.length === 0
        ? <p className="center">No logs to show...</p>
        : logs.map(log => <LogItem key={log.id} log={log} />)
      }
    </ul>
  )
}

Logs.propTypes = {
  logs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  logs: state.log.logs,
  loading: state.log.loading
})

const mapDispatchToProps = {
  getLogs
}

export default connect(mapStateToProps, mapDispatchToProps)(Logs)