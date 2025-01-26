package com.app.mine.controller;

import com.app.mine.dto.SearchDTO;
import com.app.mine.service.FileService;
import com.app.mine.service.UsedItemService;
import com.app.mine.vo.*;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
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
    public List<Map<String, Object>> getMyUsedItemList(@RequestBody UsedItemVO usedItemVO, HttpSession session) {
        UserVO userInfo = (UserVO) session.getAttribute("userInfo");
        usedItemVO.setUserId(userInfo.getUserId());
        return usedItemService.getMyUsedItemList(usedItemVO);
    }

    // 중고거래 리스트 페이지
    @GetMapping
    public Map<String, Object> getFilteredUsedItem(
            @RequestParam(value = "page", required = false) int page,
            @RequestParam(value = "amount", required = false) int amount,
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "minPrice", required = false) Long minPrice,
            @RequestParam(value = "maxPrice", required = false) Long maxPrice,
            @RequestParam(value = "searchQuery", required = false) List<String> searchQuery,
            @RequestParam(value = "searchKeyword", required = false) String searchKeyword,
            @RequestParam(value = "sort", defaultValue = "like") String sort) {

        log.info("page : {}, amount : {}, category : {}, minPrice : {}, maxPrice : {}, searchQuery : {}, sort : {}, searchKeyword : {}", page, amount,category,minPrice,maxPrice,searchQuery,sort, searchKeyword);
        Criteria criteria = Criteria.builder().page(page).amount(amount).build();
        SearchDTO searchDTO = new SearchDTO();
        searchDTO.setCategory(category);
        searchDTO.setType(sort);
        searchDTO.setSearchQuery(searchQuery);
        searchDTO.setMinPrice(minPrice);
        searchDTO.setMaxPrice(maxPrice);
        searchDTO.setSearchKeyword(searchKeyword);

        return usedItemService.getFilteredUsedItems(searchDTO, criteria);
    }

    // 중고거래 상세 페이지
    @GetMapping("/getItem")
    public Map<String, Object> getUsedItemById(Integer usedItemId) {
        return usedItemService.findUsedItemById(usedItemId);
    }
    
}
