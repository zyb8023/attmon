import { usePersistFn } from "ahooks";
import { useState } from "react";
import Login from './modal/login';

type emitState = {
  type: string,
  payload: any
}

interface showModalState {
  Com: JSX.Element | React.ClassicComponent,
  payload?: any
}

export default function GlobalEventHandle () {
  const [ showModal, setShowModal ] = useState<Array<showModalState>>([]);
  const showModalWithCheck = usePersistFn((Com, payload) => {
    if (showModal.find(i => i.Com === Com)) return false;
    setShowModal([...showModal, { Com, payload }]);
  })

  const emitGlobalEventHandle = ({ type, payload }: emitState) => {
    switch (type) {
      case 'Login':
        showModalWithCheck(Login, payload);
        break;
    
      default:
        break;
    }
  }

  return (
    <div>
      {
        !!showModal.length && showModal.map((i, index) => (
          <i.Com key={index}></i.Com>
        ))
      }
    </div>
  )
}