package com.example.LoginApp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "match_table")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "person1_id")
    private Person person1;

    @ManyToOne
    @JoinColumn(name = "person2_id")
    private Person person2;


    public Match() {}


    public Match(Long id, Person person1, Person person2) {
        this.id = id;
        this.person1 = person1;
        this.person2 = person2;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Person getPerson1() {
        return person1;
    }

    public void setPerson1(Person person1) {
        this.person1 = person1;
    }

    public Person getPerson2() {
        return person2;
    }

    public void setPerson2(Person person2) {
        this.person2 = person2;
    }
}
