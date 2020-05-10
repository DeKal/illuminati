package com.dawn.jat.illuminati.login.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.login.mock.MockAuthentication;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.Authentication;



@SpringBootTest
class LoginControllerTest {
    @Autowired
    LoginController loginController;

    @Test
    void testIndex_LoginWithNullAuth_ReturnLoginPage() {
        String page = loginController.index(null);
        assertEquals("login/index", page);
    }

    @Test
    void testIndex_LoginWithFalseAuthenticated_ReturnLoginPage() {
        Authentication auth = new MockAuthentication(false);
        String page = loginController.index(auth);
        assertEquals("login/index", page);
    }

    @Test
    void testIndex_LoginWithAuthenticated_RedirectToCms() {
        Authentication auth = new MockAuthentication(true);
        String page = loginController.index(auth);
        assertEquals("redirect:/cms", page);
    }
}