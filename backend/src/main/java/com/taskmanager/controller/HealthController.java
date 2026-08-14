package com.taskmanager.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(name = "Health Check", description = "API health status endpoints")
public class HealthController {

    @GetMapping("/")
    @Operation(summary = "Root endpoint", description = "Basic health check for the backend")
    @ApiResponse(responseCode = "200", description = "Backend is running")
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("Task Manager Backend is running");
    }

    @GetMapping("/health")
    @Operation(summary = "Health check", description = "Detailed health check endpoint")
    @ApiResponse(responseCode = "200", description = "Service is healthy")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("OK");
    }
}
