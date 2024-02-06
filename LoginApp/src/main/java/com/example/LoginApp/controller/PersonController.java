package com.example.LoginApp.controller;

import com.example.LoginApp.model.Person;
import com.example.LoginApp.service.PersonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/home")
public class PersonController {

    private PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }



    @GetMapping
    public List<Person> list() { return personService.personList();}
    // Personas menos el usuario
    @GetMapping("/api/home2")
    public List<Person> getAllPersonExceptCurrentUser(@RequestParam String currentUsername) {
        return personService.getAllPersonExceptCurrentUser(currentUsername);
    }

    @PostMapping("/{personId}/match")
    public ResponseEntity<String> makeMatch(@RequestParam String currentUsername, @PathVariable Long personId) {
        boolean isMatch = personService.makeMatch(currentUsername,personId);

        if (isMatch) {
            return ResponseEntity.ok("Match realizado exitosamente");
        } else {
            return ResponseEntity.badRequest().body("No se pudo realizar el match");
        }
    }


}
