package com.mit.service;

import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.Map;

@Service
public class AnalyticsService {

    public Map<String, Object> videoAnalysis(Map<String, Double> payload) {

        double ctr = payload.get("ctr");
        double ar = payload.get("ar");

        String result;
        if (ctr > 50) {
            result = "Good performance";
        } else {
            result = "Needs improvement";
        }
        Map<String, Object> response = new HashMap<>();
        response.put("result", result);
        return response;
    }

    public Map<String, Object> shortAnalysis(Map<String, Double> payload) {

        double ctr = payload.get("sa");
        double ar = payload.get("ar");


        String result;
        if (ar > 50) {
            result = "Good performance";
        } else {
            result = "Needs improvement";
        }

        Map<String, Object> response = new HashMap<>();
        response.put("result", result);
        return response;
    }
}
