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


    public Event saveTask(Event task) {
        return eventRepo.save(task);
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
