import React, {useEffect, useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min'
import {connect} from "react-redux";

import { updateLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogoModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');


  useEffect(() => {
    if(current === null) return

    setMessage(current.message)
    setTech(current.tech)
    setAttention(current.attention)
  }, [current])

  const onSubmit = () => {
    if(message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech'})
    } else {
      const updLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date()
      }

      updateLog(updLog)
      M.toast({ html: `Log updated by ${tech}`})

      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
              <TechSelectOptions />
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

const mapStateToProps = state => ({
  current: state.log.current
})

const mapDispatchToProps = {
  updateLog
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLogoModal)