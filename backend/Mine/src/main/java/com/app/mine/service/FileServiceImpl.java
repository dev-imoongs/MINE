package com.app.mine.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class FileServiceImpl implements FileService {

    @Value("${upload.file.path}")
    private String uploadFilePath;

    @Override
    public Map<String, Object> uploadFiles(List<MultipartFile> files) throws IOException {
        Map<String, Object> result = new HashMap<>();
        List<String> uuids = new ArrayList<>();
        List<String> filePaths = new ArrayList<>();
        String os = System.getProperty("os.name").toLowerCase();
        if(os.contains("mac")){
            uploadFilePath = System.getProperty("user.home") + "/react_project/MINE/upload/";
        }
        String path = uploadFilePath + getCurrentDatePath();


        File directory = new File(path);

        if (!directory.exists()) {
            directory.mkdirs();
        }
        log.info("::::::::::::::::::::::::::::::::::::::::::::::::::::: {} ::::::::::::::::: ", getCurrentDatePath());
        log.info("::::::::::::::::::::::::::::::::::::::::::::::::::::: {} ::::::::::::::::: ", files);
        for (MultipartFile file : files) {
            log.info("::::::::::::::::::::::::::::::::::::::::::::::::::::: {} ::::::::::::::::: ", file.getOriginalFilename());
            String uuid = UUID.randomUUID().toString();
            String fileName = uuid + "_" + file.getOriginalFilename();
            File destFile = new File(path, fileName);
            log.info("::::::::::::::::::::::::::::::::::::::::::::::::::::: {} ::::::::::::::::: ", destFile);
            file.transferTo(destFile);

            uuids.add(uuid);

            filePaths.add(getCurrentDatePath() + "/" + fileName);
        }

        result.put("uuids", uuids);
        result.put("paths", filePaths);

        return result;
    }

    private String getCurrentDatePath() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy/MM/dd"));
    }
}
