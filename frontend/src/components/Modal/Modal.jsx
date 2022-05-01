import React from 'react'
import './styles.css'

// Import contexts
import { usePopUp } from '../../context/PopUpContext'
import { useGame } from '../../context/GameContext'

const Modal = () => {
    const { popUp, closeModal } = usePopUp()
    const { gameState } = useGame()
    const correctArr = gameState.correctGuess
    const wrongArr = gameState.wrongGuess
    let total = wrongArr.length + correctArr.length
    let corRate = Math.round(correctArr.length / total * 100)
 
  return (
      <div className='modal' style={{ display: (popUp.showModal ? 'block' : 'none') }} onClick={closeModal}>
        <div className="modal-content">
            <div className="modal-header">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <h1>我的記錄</h1>
            </div>
            <div className='stat'>
                <p>學習了 {total} 個詞彙</p>
                {' '}
                <p>正確率： {corRate} %</p>
            </div>
            <div className="modal-body">
                <div className='correct-list'>
                      {correctArr.length > 0 && correctArr.map((word, index) => (
                          <p key={index}>
                              {word} {' '} <span>✅</span>
                          </p>
                      ))}
                </div>
                  <div className='wrong-list'>
                      {wrongArr.length > 0 && wrongArr.map((word, index) => (
                          <p key={index}>
                              {word} {' '} <span>❌</span>
                          </p>
                      ))}
                </div>
         
            </div>
        </div>
    </div>
  )
}

export default Modal