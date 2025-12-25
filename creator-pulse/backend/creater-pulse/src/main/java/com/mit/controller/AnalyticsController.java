package com.mit.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.Map;

import com.google.gson.JsonObject;
import com.mit.service.AnalyticsService;

@RestController
@RequestMapping("/analysis")
public class AnalyticsController {

    private final AnalyticsService service;

    public AnalyticsController(AnalyticsService service) {
        this.service = service;
    }

    @PostMapping("/video")
    public ResponseEntity<?> videoAnalysis(@RequestBody Map<String, Double> payload) {
        return ResponseEntity.ok(service.videoAnalysis(payload));
    }

    @PostMapping("/short")
    public ResponseEntity<?> shortAnalysis(@RequestBody Map<String, Double> payload) {
        return ResponseEntity.ok(service.shortAnalysis(payload));
    }
}
