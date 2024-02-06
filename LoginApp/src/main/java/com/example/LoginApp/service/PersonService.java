package com.example.LoginApp.service;

import com.example.LoginApp.model.Match;
import com.example.LoginApp.model.Person;
import com.example.LoginApp.repository.MatchRepository;
import com.example.LoginApp.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private PersonRepository personRepository;
    private MatchRepository matchRepository;

    public  PersonService(PersonRepository personRepository, MatchRepository matchRepository) {
        this.personRepository = personRepository;
        this.matchRepository = matchRepository;
    }

    public List<Person> personList() {return personRepository.findAll();}

    // Método para obtener todas las personas excepto el usuario actual
    public List<Person> getAllPersonExceptCurrentUser(String currentUsername) {
        // Implementa la lógica para obtener todas las personas excepto el usuario actual
        Person currentUser = personRepository.findByUsername(currentUsername);
        return personRepository.findAllByUsernameIsNot(currentUser.getUsername());
    }

    public boolean makeMatch(String currentUsername, Long personId) {
        // Obtener el usuario actual
        Person currentUser = personRepository.findByUsername(currentUsername);

        // Obtener la persona a hacer match
        Optional<Person> personToMatchOptional = personRepository.findById(personId);
        if (personToMatchOptional.isPresent()) {
            Person personToMatch = personToMatchOptional.get();

            // Crear un objeto Match y establecer las personas involucradas
            Match match = new Match();
            match.setPerson1(currentUser);
            match.setPerson2(personToMatch);

            // Guardar el match en la base de datos
            matchRepository.save(match);

            return true;
        }

        return false;
    }


}
