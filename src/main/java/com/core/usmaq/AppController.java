package com.core.usmaq;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
    @RequestMapping("/") // root of website (could be at /user /main menu)
    public String index(){
        return "index.html";
    }
}
