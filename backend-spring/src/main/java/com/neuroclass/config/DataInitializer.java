package com.neuroclass.config;

import com.neuroclass.model.Student;
import com.neuroclass.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    public CommandLineRunner initDatabase(StudentRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.saveAll(List.of(
                    new Student("Alice Santos", "Programação", 32, 3.5, "low"),
                    new Student("Bruno Lima", "Design Digital", 65, 6.0, "medium"),
                    new Student("Camila Rocha", "Matemática", 78, 9.0, "high"),
                    new Student("Daniel Costa", "Ciência de Dados", 48, 4.0, "medium"),
                    new Student("Eduarda Nunes", "Engenharia", 55, 2.5, "low")
                ));
            }
        };
    }
}
