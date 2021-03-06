import React, {useEffect} from "react";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {getTechs} from "../../actions/techActions";

const TechSelectOptions = ({ getTechs, techs, loading }) => {
  useEffect(() => {
    getTechs()
  }, [])

  return (
    !loading && techs.map(t =>
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    )
  )
}

TechSelectOptions.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  techs: state.tech.techs,
  loading: state.tech.loading
})

const mapDispatchToProps = {
  getTechs
}
export default connect(mapStateToProps, mapDispatchToProps)(TechSelectOptions)