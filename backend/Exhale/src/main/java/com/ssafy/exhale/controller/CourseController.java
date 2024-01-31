package com.ssafy.exhale.controller;

import com.ssafy.exhale.dto.responseDto.common.CommonResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CourseController {
    @GetMapping("test")
    public String testMethod() {
        return "a";
    }
}
