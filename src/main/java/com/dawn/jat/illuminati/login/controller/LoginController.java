package com.dawn.jat.illuminati.login.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
    @RequestMapping(value = {"/login"})
    public String index(Authentication authentication) {
        if (authentication.isAuthenticated()) {
            return "redirect:/cms";
        }
        return "login/index";
    }
}
