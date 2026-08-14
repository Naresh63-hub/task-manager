package com.taskmanager.dto;

import com.taskmanager.entity.Task;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskRequest {

    @NotBlank(message = "Title cannot be empty")
    @Size(max = 200, message = "Title must not exceed 200 characters")
    private String title;

    @Size(max = 1000, message = "Description must not exceed 1000 characters")
    private String description;

    @NotNull(message = "Priority cannot be null")
    private Task.Priority priority;

    @NotNull(message = "Status cannot be null")
    private Task.Status status;

    @FutureOrPresent(message = "Due date must be today or in the future")
    private LocalDate dueDate;
}