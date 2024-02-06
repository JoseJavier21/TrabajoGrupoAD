package com.example.LoginApp.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;

    private String password;

    @OneToMany(mappedBy = "person1")
    private List<Match> matchesAsPerson1;

    @OneToMany(mappedBy = "person2")
    private List<Match> matchesAsPerson2;

    public Person() {
    }

    public Person(Long id, String username, String password, List<Match> matchesAsPerson1, List<Match> matchesAsPerson2) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.matchesAsPerson1 = matchesAsPerson1;
        this.matchesAsPerson2 = matchesAsPerson2;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Match> getMatchesAsPerson1() {
        return matchesAsPerson1;
    }

    public void setMatchesAsPerson1(List<Match> matchesAsPerson1) {
        this.matchesAsPerson1 = matchesAsPerson1;
    }

    public List<Match> getMatchesAsPerson2() {
        return matchesAsPerson2;
    }

    public void setMatchesAsPerson2(List<Match> matchesAsPerson2) {
        this.matchesAsPerson2 = matchesAsPerson2;
    }
}
