package com.kenny.pushnotifications.controller;

import com.kenny.pushnotifications.dto.NotificationRequest;
import com.kenny.pushnotifications.service.PushNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    @Autowired
    private PushNotificationService pushNotificationService;

    @PostMapping("/send")
    public String sendNotification(@RequestBody NotificationRequest notificationRequest) {
        pushNotificationService.sendNotification(notificationRequest.getToken(), notificationRequest.getTitle(), notificationRequest.getBody());
        return "Notification sent!";
    }
}

