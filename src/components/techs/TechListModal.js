import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TechItem from "./TechItem";
import {getTechs} from "../../actions/techActions";

const TechListModal = ({ techs, getTechs, loading }) => {
  useEffect(() => {
    getTechs()
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technical List</h4>
        <ul className="collection">
          {!loading && techs.map(tech => (
            <TechItem key={tech.id} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  )
}

TechListModal.propTypes = {
  techs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading
})

const mapDispatchToProps = {
  getTechs
}

export default connect(mapStateToProps, mapDispatchToProps)(TechListModal)