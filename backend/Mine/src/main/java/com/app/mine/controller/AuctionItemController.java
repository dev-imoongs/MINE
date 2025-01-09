package com.app.mine.controller;

import com.app.mine.service.AuctionItemService;
import com.app.mine.service.FileService;
import com.app.mine.vo.AuctionItemVO;
import com.app.mine.vo.FileVO;
import com.app.mine.vo.UsedItemVO;
import com.app.mine.vo.UserVO;
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
@RequiredArgsConstructor
@RequestMapping("/api/auction-items")
@Slf4j
public class AuctionItemController {

    private final AuctionItemService auctionItemService;
    private final FileService fileService;

    @PostMapping("/save")
    public void saveUsedItem(@RequestPart("auctionItem") AuctionItemVO auctionItemVO,
                             @RequestPart(name = "files", required = false) List<MultipartFile> files, HttpSession session) throws IOException {

        UserVO userInfo = (UserVO)session.getAttribute("userInfo");
        auctionItemVO.setUserId(userInfo.getUserId());

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

        auctionItemService.saveAuctionItem(auctionItemVO, fileVOList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AuctionItemVO> getAuctionItem(@PathVariable int id) {
        AuctionItemVO item = auctionItemService.getAuctionItemById(id);
        return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<AuctionItemVO>> getFilteredAuctionItems(
            @RequestParam(value = "category", required = false) Integer category,
            @RequestParam(value = "minPrice", required = false) Integer minPrice,
            @RequestParam(value = "maxPrice", required = false) Integer maxPrice,
            @RequestParam(value = "searchQuery", required = false) String searchQuery,
            @RequestParam(value = "sort", defaultValue = "likes") String sort) {

        log.info("Filters received: category={}, minPrice={}, maxPrice={}, searchQuery={}, sort={}",
                category, minPrice, maxPrice, searchQuery, sort);

        // category, minPrice, maxPrice가 null일 경우 -1로 설정
        if (category == null) {
            category = -1;
        }

        if (minPrice == null) {
            minPrice = -1;  // 예시로 -1로 설정 (매퍼에서 처리)
        }

        if (maxPrice == null) {
            maxPrice = -1;  // 예시로 -1로 설정 (매퍼에서 처리)
        }

        if (searchQuery == null) {
            searchQuery = "";  // 검색어가 null일 경우 빈 문자열로 설정
        }

        List<AuctionItemVO> res = auctionItemService.getFilteredAuctionItems(category, minPrice, maxPrice, searchQuery, sort);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/getMyAuctionItemList")
    public List<AuctionItemVO> getMyAuctionItemList(HttpSession session) {
        UserVO userInfo = (UserVO)session.getAttribute("userInfo");
        return auctionItemService.getMyAuctionItemList(userInfo);
    }
}
