import React, { useState, useEffect, useRef } from "react";
import "../../css/notificationToggle.css";

const notifications = [
  {
    id: 1,
    title: "New Message",
    message: "You have a new message from John",
    timestamp: "2 minutes ago",
    isRead: false,
  },
  {
    id: 2,
    title: "Order Update",
    message: "Your order #12345 has been shipped",
    timestamp: "1 hour ago",
    isRead: false,
  },
  {
    id: 3,
    title: "Reminder",
    message: "Don't forget about your meeting at 3 PM",
    timestamp: "3 hours ago",
    isRead: true,
  },
  {
    id: 4,
    title: "System Alert",
    message: "Scheduled maintenance tonight at 2 AM",
    timestamp: "5 hours ago",
    isRead: false,
  },
  {
    id: 5,
    title: "Welcome",
    message: "Welcome to our platform! Get started with these tips",
    timestamp: "1 day ago",
    isRead: true,
  },
  {
    id: 6,
    title: "Payment Received",
    message: "Payment of $99.99 has been received",
    timestamp: "2 days ago",
    isRead: true,
  },
];

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationList, setNotificationList] = useState(notifications);
  const dropdownRef = useRef(null);

  // TODO: Calculate unread count
  const unreadCount = notificationList.filter(
    (notification) => !notification.isRead
  ).length;

  // TODO: Implement handleBellClick function
  const handleBellClick = () => {
    setIsOpen((p)=>!p)
  };
 console.log(notificationList) 

  // TODO: Implement handleNotificationClick function
  const handleNotificationClick = (notificationId) => {
  setNotificationList((prev)=>prev.map((notif)=>notif.id===notificationId?{...notif,isRead:true}:notif))
 console.log(notificationList) 
  };

  // TODO: Implement handleMarkAllAsRead function
  const handleMarkAllAsRead = () => {
    setNotificationList((prev)=>prev.map((notif)=>({...notif,isRead:true})))
  };

  // TODO: Implement formatTimestamp function
  const formatTimestamp = (timestamp) => {
return timestamp
  };

  // TODO: Implement click outside handler
  useEffect(() => {
     if (!isOpen) return

     function handleClickOutside(event) {
      console.log("handleoutside click")
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

    document.addEventListener("mousedown",handleClickOutside)

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
  }, [isOpen]);

  return (
    <div className="notification-container" role="main">
      <h1>Notification Bell</h1>
      <p className="subtitle">Click the bell to see your notifications</p>

      <div className="bell-wrapper" ref={dropdownRef}>
        <button
          className="bell-button"
          onClick={handleBellClick}
          data-testid="notification-bell"
          aria-label="Toggle notifications"
        >
          🔔
        </button>

        {/* TODO: Show badge only when there are unread notifications */}
        {unreadCount > 0 && (
          <span className="notification-badge" data-testid="notification-badge">
            {unreadCount}
          </span>
        )}

        {/* TODO: Show dropdown when isOpen is true */}
        {isOpen && (
          <div
            className="notification-dropdown"
            data-testid="notification-dropdown"
          >
            <div className="dropdown-header">
              <h3>Notifications</h3>
              {/* TODO: Show mark all button only when there are unread notifications */}
              {unreadCount > 0 && (
                <button
                  className="mark-all-button"
                  onClick={handleMarkAllAsRead}
                >
                  Mark all as read
                </button>
              )}
            </div>

            <div className="notification-list">
              {/* TODO: Handle empty state */}
              {notificationList.length === 0 ? (
                <div className="empty-state">
                  <p>No notifications</p>
                </div>
              ) : (
                notificationList.map((notification) => (
                  <div
                    key={notification.id}
                    className={`notification-item ${
                      notification.isRead ? "read" : "unread"
                    }`}
                    onClick={() => handleNotificationClick(notification.id)}
                    data-testid="notification-item"
                  >
                    <div className="notification-content">
                      <h4 className="notification-title">
                        {notification.title}
                      </h4>
                      <p className="notification-message">
                        {notification.message}
                      </p>
                      <span className="notification-timestamp">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                    </div>
                    {/* TODO: Show unread indicator only for unread notifications */}
                    {!notification.isRead && (
                      <div className="unread-indicator"></div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      <div className="stats">
        <p>Total notifications: {notificationList.length}</p>
        <p>Unread notifications: {unreadCount}</p>
      </div>
    </div>
  );
}
