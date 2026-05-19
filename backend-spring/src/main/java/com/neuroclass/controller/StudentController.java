package com.neuroclass.controller;

import com.neuroclass.model.Student;
import com.neuroclass.repository.StudentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
public class StudentController {

    private final StudentRepository repository;

    public StudentController(StudentRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Student> list() {
        return repository.findAll();
    }

    @PostMapping
    public Student save(@RequestBody Student student) {
        return repository.save(student);
    }
}
