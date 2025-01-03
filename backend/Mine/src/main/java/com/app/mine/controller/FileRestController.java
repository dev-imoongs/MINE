package com.app.mine.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;


@RestController
@RequestMapping("/api/files/*")
@RequiredArgsConstructor
@Slf4j
public class FileRestController {

    @Value("${upload.file.path}")
    private String uploadFilePath;

    String os = System.getProperty("os.name").toLowerCase();
    //    파일 불러오기
    @GetMapping("display")
    public byte[] businessDisplay(String filePath) throws Exception {
        if(os.contains("mac")){
            uploadFilePath = System.getProperty("user.home") + "/react_project/MINE/upload/";
            log.info(":::::::::::::::::::::::::::::::::::::::{}", uploadFilePath);
        }
        try {
            return filePath.contentEquals("null") || filePath.isBlank() ? null : FileCopyUtils.copyToByteArray(new File(uploadFilePath, filePath));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}

