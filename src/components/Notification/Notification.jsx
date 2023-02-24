import PropsTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { ImNotification } from 'react-icons/im';
import { NotificationText } from './Notification.module';

export const Notification = ({ message }) => {
  return (
    <NotificationText>
      <IconContext.Provider value={{ color: 'orange', size: 35 }}>
        <ImNotification />
      </IconContext.Provider>
      <span>{message}</span>
      <IconContext.Provider value={{ color: 'orange', size: 35 }}>
        <ImNotification />
      </IconContext.Provider>
    </NotificationText>
  );
};

Notification.propsType = {
  message: PropsTypes.string.isRequired,
};
