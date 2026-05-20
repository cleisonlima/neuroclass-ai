package com.neuroclass.model;

import jakarta.persistence.*;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String course;
    private Integer progressPercent;
    private Double weeklyStudyHours;
    private String engagementLevel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public Integer getProgressPercent() {
        return progressPercent;
    }

    public void setProgressPercent(Integer progressPercent) {
        this.progressPercent = progressPercent;
    }

    public Double getWeeklyStudyHours() {
        return weeklyStudyHours;
    }

    public void setWeeklyStudyHours(Double weeklyStudyHours) {
        this.weeklyStudyHours = weeklyStudyHours;
    }

    public String getEngagementLevel() {
        return engagementLevel;
    }

    public void setEngagementLevel(String engagementLevel) {
        this.engagementLevel = engagementLevel;
    }

    public Student() {
    }

    public Student(String name, String course, Integer progressPercent, Double weeklyStudyHours, String engagementLevel) {
        this.name = name;
        this.course = course;
        this.progressPercent = progressPercent;
        this.weeklyStudyHours = weeklyStudyHours;
        this.engagementLevel = engagementLevel;
    }
}
