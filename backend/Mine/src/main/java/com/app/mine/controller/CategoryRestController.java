package com.app.mine.controller;

import com.app.mine.service.CategoryService;
import com.app.mine.vo.CategoryVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/category/*")
@RequiredArgsConstructor
@Slf4j
public class CategoryRestController {

    private final CategoryService categoryService;

    @PostMapping("get-category")
    public List<CategoryVO> getCategory() {
        return categoryService.getCategory();
    }
}
