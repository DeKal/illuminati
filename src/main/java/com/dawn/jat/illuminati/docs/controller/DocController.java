package com.dawn.jat.illuminati.docs.controller;

import lombok.Generated;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Generated
@Controller
public class DocController {
    @GetMapping(value = {"/api"})
    public String getApiDocs() {
        return "redirect:/swagger-ui.html";
    }
}
