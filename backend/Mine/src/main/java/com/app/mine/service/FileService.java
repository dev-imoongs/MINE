package com.app.mine.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

public interface FileService {

    public Map<String, Object> uploadFiles(List<MultipartFile> files) throws IOException;
}
