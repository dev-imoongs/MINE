package com.app.mine.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
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
    public ResponseEntity<byte[]> businessDisplay(String filePath) throws Exception {
        try {
            if (filePath.contentEquals("null") || filePath.isBlank()) {
                return ResponseEntity.badRequest().build();
            }

            if(os.contains("mac")){
                uploadFilePath = System.getProperty("user.home") + "/react_project/MINE/upload/";
                log.info(":::::::::::::::::::::::::::::::::::::::{}", uploadFilePath);
            }

            File file = new File(uploadFilePath, filePath);
            byte[] fileBytes = FileCopyUtils.copyToByteArray(file);

            // 파일의 MIME 타입을 동적으로 추론
            String mimeType = Files.probeContentType(file.toPath());
            if (mimeType == null) {
                mimeType = "application/octet-stream";
            }

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_TYPE, mimeType)
                    .body(fileBytes);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}

