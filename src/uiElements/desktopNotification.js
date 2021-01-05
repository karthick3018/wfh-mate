import React from 'react';
import Notification from 'react-web-notification';
import mate from '../components/illustrations/mate.png';

const DesktopNotification = ({
  title='WFH mate',
  body,
  sound,
  showDesktopNotification,
  resetValue,
  timing=4000,
}) => {

  const options = {
    tag: 'now',
    body,
    icon: mate,
    lang: 'en',
    dir: 'ltr',
  }

  const onPermissionDenied = () => {
     alert('Allow notification in site settings to achieve the functionality!')
  }

  const handleOnShow = () => {
    resetValue()
  }

  return (
    <div>
      {showDesktopNotification &&
       <Notification
        askAgain = {true}
        onShow={handleOnShow}
        onPermissionDenied = {onPermissionDenied}
        timeout={6000}
        title={title}
        options={options}
       />}
    </div>
  )
}

export default DesktopNotification;
