package com.dawn.jat.illuminati.cms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class CmsController {
    @RequestMapping("/cms")
    public String index() {
        return "cms/index";
    }
}
