package com.dawn.jat.illuminati.docs.controller;

import lombok.Generated;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Generated
@Controller
public class DocController {
    @RequestMapping(value = {"/api"})
    public String index() {
        return "redirect:/swagger-ui.html";
    }
}
