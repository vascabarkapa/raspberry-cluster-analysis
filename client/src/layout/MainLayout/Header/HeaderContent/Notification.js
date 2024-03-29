import { useEffect, useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Badge,
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Popper,
  Typography,
  useMediaQuery
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';

// assets
import { BellOutlined, CloseOutlined, SettingOutlined } from '@ant-design/icons';

// services and helpers
import NotificationService from '../../../../shared/services/notification-service';
import DateTimeHelper from '../../../../shared/helpers/DateTimeHelper';

// sx styles
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

const actionSX = {
  mt: '6px',
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',

  transform: 'none'
};

// ==============================|| HEADER CONTENT - NOTIFICATION ||============================== //

const Notification = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const [initialRender, setInitialRender] = useState(true);
  const [numberOfUnreadNotifications, setNumberOfUnreadNotifications] = useState(0);
  const [notifications, setNotifications] = useState([]);

  function handleReadNotification(id) {
    NotificationService.readNotification(id).then((readResponse) => {
      if (readResponse) {
        NotificationService.getNotifications().then((response) => {
          if (response) {
            const notifications = response?.data;
            const unreadNotifications = notifications.filter((notification) => !notification.is_read);

            setNotifications(notifications);
            setNumberOfUnreadNotifications(unreadNotifications.length);
          }
        });
      }
    });
  }

  function handleReadAllNotification() {
    NotificationService.readAllNotifications().then((readAllResponse) => {
      if (readAllResponse) {
        NotificationService.getNotifications().then((response) => {
          if (response) {
            const notifications = response?.data;
            const unreadNotifications = notifications.filter((notification) => !notification.is_read);

            setNotifications(notifications);
            setNumberOfUnreadNotifications(unreadNotifications.length);
          }
        });
      }
    });
  }

  useEffect(() => {
    if (!initialRender) {
      NotificationService.getNotifications().then(
        (response) => {
          if (response) {
            const notifications = response?.data;
            const unreadNotifications = notifications.filter((notification) => !notification.is_read);

            setNotifications(notifications);
            setNumberOfUnreadNotifications(unreadNotifications.length);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }

    setInitialRender(false);
  }, [initialRender]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = 'grey.300';
  const iconBackColor = 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        disableRipple
        color="secondary"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Badge badgeContent={numberOfUnreadNotifications} color="primary">
          <BellOutlined />
        </Badge>
      </IconButton>
      <Popper
        placement={matchesXs ? 'bottom' : 'bottom-end'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? -5 : 0, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            <Paper
              sx={{
                boxShadow: theme.customShadows.z1,
                width: '100%',
                minWidth: 285,
                maxWidth: 420,
                [theme.breakpoints.down('md')]: {
                  maxWidth: 285
                }
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  title="Notifications"
                  elevation={0}
                  border={false}
                  content={false}
                  secondary={
                    <IconButton size="small" onClick={handleToggle}>
                      <CloseOutlined />
                    </IconButton>
                  }
                >
                  <List
                    component="nav"
                    sx={{
                      p: 0,
                      '& .MuiListItemButton-root': {
                        py: 0.5,
                        '& .MuiAvatar-root': avatarSX,
                        '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                      },
                      maxHeight: '315px',
                      overflow: 'auto'
                    }}
                  >
                    {notifications && notifications?.length > 0 ? (
                      notifications.map((notification) => {
                        return (
                          <>
                            <ListItemButton
                              sx={!notification?.is_read && { bgcolor: 'primary.lighter' }}
                              onClick={() => {
                                if (!notification?.is_read) {
                                  handleReadNotification(notification?._id);
                                }
                              }}
                            >
                              <ListItemAvatar>
                                <Avatar
                                  sx={{
                                    color: 'error.main',
                                    bgcolor: 'error.lighter'
                                  }}
                                >
                                  <SettingOutlined />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <Typography variant="h6" sx={{ mr: 5 }}>
                                    Your cluster is&nbsp;
                                    <Typography component="span" variant="subtitle1">
                                      overloaded!
                                    </Typography>{' '}
                                  </Typography>
                                }
                                secondary={notification?.description}
                              />
                              <ListItemSecondaryAction>
                                <Typography variant="caption" noWrap>
                                  {DateTimeHelper.calculateTimeAgo(notification?.createdAt)}
                                </Typography>
                              </ListItemSecondaryAction>
                            </ListItemButton>
                            <Divider />
                          </>
                        );
                      })
                    ) : (
                      <ListItemButton sx={{ textAlign: 'center', py: `${12}px !important` }} disabled>
                        <ListItemText primary={<Typography variant="h6">There aren&apos;t new notifications</Typography>} />
                      </ListItemButton>
                    )}
                  </List>
                  {notifications && notifications.length > 0 ? (
                    <ListItemButton
                      sx={{ textAlign: 'center', py: `${12}px !important` }}
                      onClick={() => {
                        if (notifications.some((notification) => !notification.is_read)) {
                          handleReadAllNotification();
                        }
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography variant="h6" color="primary">
                            Read All
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  ) : (
                    <></>
                  )}
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Notification;
