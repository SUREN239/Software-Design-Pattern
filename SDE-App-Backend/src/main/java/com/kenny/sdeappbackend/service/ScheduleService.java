package com.kenny.sdeappbackend.service;

import com.kenny.sdeappbackend.exception.ResourceNotFoundException;
import com.kenny.sdeappbackend.model.Schedule;
import com.kenny.sdeappbackend.repo.ScheduleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepo scheduleRepository;

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public Optional<Schedule> getScheduleById(Long id) {
        return scheduleRepository.findById(id);
    }

    public Schedule createSchedule(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    public Schedule updateSchedule(Long id, Schedule scheduleDetails) {
        return scheduleRepository.findById(id).map(schedule -> {
            schedule.setTitle(scheduleDetails.getTitle());
            schedule.setDate(scheduleDetails.getDate());
            schedule.setTime(scheduleDetails.getTime());
            schedule.setRoom(scheduleDetails.getRoom());
            schedule.setUser(scheduleDetails.getUser());
            return scheduleRepository.save(schedule);
        }).orElseThrow(() -> new ResourceNotFoundException("Schedule not found with id " + id));
    }

    public void deleteSchedule(Long id) {
        scheduleRepository.deleteById(id);
    }
}
