package com.app.mine.controller;

import com.app.mine.dto.SearchDTO;
import com.app.mine.service.FileService;
import com.app.mine.service.UsedItemService;
import com.app.mine.vo.FileVO;
import com.app.mine.vo.UsedItemVO;
import com.app.mine.vo.UserVO;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/used-item/*")
@RequiredArgsConstructor
@Slf4j
public class UsedItemRestController {

    private final UsedItemService usedItemService;
    private final FileService fileService;

    @PostMapping("save")
    public void saveUsedItem(@RequestPart("usedItem") UsedItemVO usedItemVO,
                             @RequestPart(name = "files", required = false) List<MultipartFile> files, HttpSession session) throws IOException {

        UserVO userInfo = (UserVO)session.getAttribute("userInfo");
        usedItemVO.setUserId(userInfo.getUserId());

        List<FileVO> fileVOList = new ArrayList<>();

        Map<String, Object> fileUploadResult = fileService.uploadFiles(files);

        List<String> uuids = (List<String>) fileUploadResult.get("uuids");
        List<String> filePaths = (List<String>) fileUploadResult.get("paths");

        for (int i = 0; i < files.size(); i++) {
            FileVO fileVO = new FileVO();

            fileVO.setFileUuid(uuids.get(i));
            fileVO.setFilePath(filePaths.get(i));
            fileVO.setFileName(files.get(i).getOriginalFilename());
            fileVO.setFileSize(Integer.parseInt(String.valueOf(files.get(i).getSize())));

            fileVOList.add(fileVO);
        }

        usedItemService.saveUsedItem(usedItemVO, fileVOList);
    }

//    마이페이지 내 중고 아이템
    @PostMapping("/getMyUsedItemList")
    public List<UsedItemVO> getMyUsedItemList(HttpSession session) {
        UserVO userInfo = (UserVO)session.getAttribute("userInfo");
        return usedItemService.getMyUsedItemList(userInfo);
    }

    // 중고거래 상세 페이지
    @GetMapping("/getItem")
    public Map<String, Object> getUsedItemById(Integer usedItemId) {
        return usedItemService.findUsedItemById(usedItemId);
    }
    
}
