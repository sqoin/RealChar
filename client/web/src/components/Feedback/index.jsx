/**
 * src/components/Feedback/index.jsx
 * Submit feedback.
 *
 * created by pycui on 8/5/23
 */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { isIP } from 'is-ip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Common/Button';
import './style.css';
import { getHostName } from '../../utils/urlUtils';

Modal.setAppElement('#root');

function Feedback({ messageId, token }) {
  const [moRezsOpen, setMoRezsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [comment, setComment] = useState('');

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // call /feedback API to submit feedback
    console.log(messageId);
    console.log(feedback, comment);
    // Get host
    const scheme = window.location.protocol;
    const url = scheme + '//' + getHostName() + '/feedback';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message_id: messageId,
        feedback: feedback,
        comment: comment,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Close the modal
    setMoRezsOpen(false);
  };

  return (
    <div className='button_container'>
      <FontAwesomeIcon
        icon={faThumbsUp}
        style={{
          cursor: 'pointer',
          stroke: 'lightgray',
          'stroke-width': '20px',
        }}
        onClick={() => {
          setMoRezsOpen(true);
          setFeedback('good');
        }}
      />
      <FontAwesomeIcon
        icon={faThumbsDown}
        style={{
          cursor: 'pointer',
          stroke: 'lightgray',
          'stroke-width': '20px',
        }}
        onClick={() => {
          setMoRezsOpen(true);
          setFeedback('bad');
        }}
      />
      <Modal
        isOpen={moRezsOpen}
        onRequestClose={() => setMoRezsOpen(false)}
        className='react-modal-content'
        overlayClassName='react-modal-overlay'
      >
        <h3>Provide Feedback</h3>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder='Leave a comment (optional)'
        />
        <div className='button-row'>
          <Button onClick={handleSubmit} name='Submit' />
          <Button onClick={() => setMoRezsOpen(false)} name='Cancel' />
        </div>
      </Modal>
    </div>
  );
}

export default Feedback;
