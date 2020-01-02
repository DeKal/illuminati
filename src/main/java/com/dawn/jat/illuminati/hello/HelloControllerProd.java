package com.dawn.jat.illuminati.hello;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Profile("prod")
@Controller
public class HelloControllerProd extends HelloController {
    @RequestMapping("/hello")
    public String index() {
        return "hello/prod";
    }
}
