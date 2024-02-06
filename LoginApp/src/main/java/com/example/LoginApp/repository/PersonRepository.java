package com.example.LoginApp.repository;

import com.example.LoginApp.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {

    // Método para encontrar un usuario por su nombre de usuario
    Person findByUsername(String username);

    // Método para encontrar todas las personas cuyo nombre de usuario no coincida con el proporcionado
    List<Person> findAllByUsernameIsNot(String username);

}
