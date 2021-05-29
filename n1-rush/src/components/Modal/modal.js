import { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

import CloseMenu from '../../icons/close-menu.svg';

import style from './modal.module.scss';

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div className={style.background} onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className={style.modalWrapper}>
              <span
                className={style.modalClose}
                aria-label='Fechar mensagem'
                onClick={() => setShowModal((prev) => !prev)}
              >
                <CloseMenu fill='#fff' />
              </span>
              <div className={style.modalContent}>
                <h4>Pedido realizado com sucesso!</h4>
                <img src='/img/mario.png' alt='Mario comemorando' />
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
