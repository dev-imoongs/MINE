package com.app.mine.controller;

import com.app.mine.vo.TestVO;
import com.app.mine.service.TestService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/test/*")
@RequiredArgsConstructor
@Slf4j
public class TestRestController {

    private final TestService testService;

    @GetMapping("test")
    public String test(Model model) {
        List<TestVO> test = testService.test();

        model.addAttribute("test", test);

        return "test";
    }
}
