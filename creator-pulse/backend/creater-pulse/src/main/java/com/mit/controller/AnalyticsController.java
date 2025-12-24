package com.mit.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.mit.service.AnalyticsService;
import org.springframework.http.ResponseEntity;


@RestController
@RequestMapping("/anlysis")
public class AnalyticsController {

    private final AnalyticsService service;

    public AnalyticsController(AnalyticsService service) {
        this.service = service;
    }

    @PostMapping("/video")
    public ResponseEntity<?> videoAnalysis(@RequestBody JsonObject jsonObject) {
        try {
            return ResponseEntity.ok(service.videoAnalysis(jsonObject));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/short")
    public ResponseEntity<?> shortAnalysis(@RequestBody JsonObject jsonObject) {
        try {
            return ResponseEntity.ok(service.shortAnalysis(jsonObject));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }


}



