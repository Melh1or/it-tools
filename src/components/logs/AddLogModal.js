import React, { useState } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min'
import PropTypes from 'prop-types'

import { addLog } from "../../actions/logActions";

const AddLogoModal = ({ addLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if(message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech'})
    } else {
      const newLog = {
        message,
        tech,
        attention,
        date: new Date()
      }
      addLog(newLog)

      M.toast({ html: `Log added by ${tech}`})

      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>

        <div className="row">
          <div className="input-field">
            <input
              id="message"
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">Log Message</label>
          </div>
        </div>

        <div className="row">
          <div className="input-filed">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>Select Technician</option>
              <option value="John Doe">John Doe</option>
              <option value="John Smith">John Smith</option>
              <option value="Tom Smith">Tom Smith</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={attention}
                  value={attention}
                  className="filled-in"
                  onChange={() => setAttention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">
            Enter
          </a>
        </div>

      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

AddLogoModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  addLog
}

export default connect(null, mapDispatchToProps)(AddLogoModal)