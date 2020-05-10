package com.dawn.jat.illuminati.login.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;

import com.dawn.jat.illuminati.login.entity.User;
import com.dawn.jat.illuminati.login.repository.LoginRepository;

import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.domain.Example;




@ExtendWith(MockitoExtension.class)
@SpringBootTest
@ComponentScan("com.dawn.jat.illuminati.login")
class LoginServiceTest {
    @Mock
    LoginRepository loginRepository;

    @InjectMocks
    LoginService loginService;

    @Test
    void testLogin_RepoReturnNull_ReturnNull() {
        Mockito.when(loginRepository.findOne(any(Example.class)))
                .thenReturn(Optional.empty());
        assertNull(loginService.login("user", "password"));
    }

    @Test
    void testLogin_RepoReturnUser_ReturnUser() {
        User user = new User("user", "password", "");
        Mockito.when(loginRepository.findOne(any(Example.class)))
                .thenReturn(Optional.of(user));
        assertEquals(user, loginService.login("user", "password"));
    }
}