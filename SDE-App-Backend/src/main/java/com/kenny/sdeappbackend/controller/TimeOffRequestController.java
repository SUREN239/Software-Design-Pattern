package com.kenny.sdeappbackend.controller;

import com.kenny.sdeappbackend.model.TimeOffRequest;
import com.kenny.sdeappbackend.service.TimeOffRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/timeoff")
public class TimeOffRequestController {

    @Autowired
    private TimeOffRequestService service;

    @PostMapping("/submit")
    public ResponseEntity<TimeOffRequest> submitTimeOffRequest(@RequestBody TimeOffRequest request) {
        TimeOffRequest savedRequest = service.submitRequest(request);
        return new ResponseEntity<>(savedRequest, HttpStatus.CREATED);
    }
}
