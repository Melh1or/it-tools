import React from 'react';
import M from 'materialize-css/dist/js/materialize.min'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {deleteTech} from "../../actions/techActions";

const TechItem = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id)

    M.toast({ html: `${tech.firstName} ${tech.lastName} was Deleted` })
  }
  return (
    <li className="collection-item">
      <div>{tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  deleteTech
}

export default connect(null, mapDispatchToProps)(TechItem)