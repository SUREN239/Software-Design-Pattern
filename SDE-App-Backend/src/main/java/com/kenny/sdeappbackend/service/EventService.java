package com.kenny.sdeappbackend.service;

import com.kenny.sdeappbackend.enums.Role;
import com.kenny.sdeappbackend.model.Event;
import com.kenny.sdeappbackend.model.User;
import com.kenny.sdeappbackend.repo.EventRepo;
import com.kenny.sdeappbackend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private UserRepo userRepo;

    public List<Event> getAllEvents() {
        return eventRepo.findAll();
    }

    public Event createEvent(Event event) {
        // Set start time to current time
        LocalDateTime now = LocalDateTime.now();
        event.setStart(now);

        // Set end time to 05:00 PM of the deadline date
        LocalDateTime end = event.getDeadline().withHour(17).withMinute(0).withSecond(0).withNano(0);
        event.setEnd(end);

        // Set createdBy to the currently logged-in user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUsername = authentication.getName();
        event.setCreatedBy(currentUsername);

        // Set default value for isPublic
        event.setPublic(true);

        // Map user IDs to User entities with USER role
        List<Long> assigneeIds = event.getAssignees().stream()
                .map(User::getId)
                .toList(); // Extract user IDs

        List<User> assignees = userRepo.findByIdIn(assigneeIds);
        // Ensure all assignees have the USER role
        assignees = assignees.stream()
                .filter(user -> user.getRole() == Role.USER)
                .toList();

        // Associate assignees with the event
        for (User assignee : assignees) {
            assignee.setEvent(event); // Set the event for each user
        }
        event.setAssignees(assignees);

        return eventRepo.save(event);
    }


    public void deleteEvent(Long id) {
        // Check if event exists before attempting to delete
        if (eventRepo.existsById(id)) {
            eventRepo.deleteById(id);
        } else {
            throw new RuntimeException("Event not found with id: " + id);
        }
    }
}
