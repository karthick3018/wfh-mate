import React from 'react';
import Notification from 'react-web-notification';
import mate from '../components/illustrations/mate.png';

const DesktopNotification = ({
  title='WFH mate',
  body,
  sound,
  showDesktopNotification,
  resetValue
}) => {

  const options = {
    tag: 'now',
    body,
    icon: mate,
    lang: 'en',
    dir: 'ltr',
  }


  const handleNotSupported = () => {

  }

  const handleNotificationOnClick = () => {

  }

  const handleNotificationOnClose = () => {
  }

  const handleNotificationOnError = () => {

  }

  const handleOnShow = () => {
    resetValue()
    const audio = new Audio(sound);
    audio.play();
  }

  return (
    <div>
      {showDesktopNotification &&  
       <Notification
        askAgain = {true}
        notSupported={handleNotSupported}
        onShow={handleOnShow}
        onClick={handleNotificationOnClick}
        onClose={handleNotificationOnClose}
        onError={handleNotificationOnError}
        timeout={4000}
        title={title}
        options={options}
       />}
    </div>
  )
}

export default DesktopNotification;
