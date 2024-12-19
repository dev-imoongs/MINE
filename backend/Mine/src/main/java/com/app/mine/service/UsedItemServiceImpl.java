package com.app.mine.service;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.UsedItemMapper;
import com.app.mine.vo.UsedItemVO;
import com.app.mine.vo.UserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class UsedItemServiceImpl implements UsedItemService {

    private final UsedItemMapper usedItemMapper;

    @Override
    public void saveUsedItem(UsedItemVO usedItemVO) {
        usedItemMapper.insertUsedItem(usedItemVO);
    }

    @Override
    public List<Map<String, Object>> getAllUsedItems() {
        List<Map<String, Object>> result = new ArrayList<>();
        SearchDTO searchDTO = new SearchDTO();
         
        // 최근 상품
        searchDTO.setType("recent");
        searchDTO.setPageSize(12);

        List<UsedItemVO> recentUsedItem = usedItemMapper.findAllUsedItem(searchDTO);

        // 기본 상품
        searchDTO.setType("default");
        List<UsedItemVO> defaultUsedItem = usedItemMapper.findAllUsedItem(searchDTO);
        // 데이터 추가
        Map<String, Object> recentUsedItemsMap = new HashMap<>();
        recentUsedItemsMap.put("type", "recent");
        recentUsedItemsMap.put("data", recentUsedItem);

        Map<String, Object> defaultUsedItemsMap = new HashMap<>();
        defaultUsedItemsMap.put("type", "default");
        defaultUsedItemsMap.put("data", defaultUsedItem);

        result.add(recentUsedItemsMap);
        result.add(defaultUsedItemsMap);

        return result;
    }

    @Override
    public List<UsedItemVO> getMyUsedItemList(UserVO userVO) {
        return usedItemMapper.getMyUsedItemList(userVO);
    }

    @Override
    public PageDTO<UsedItemVO> getFilteredUsedItems(SearchDTO searchDTO) {
        //총 데이터 개수
        int totalCount = usedItemMapper.getUsedItemCount(searchDTO);

        //페이지 정보 계산 - 현재 페이지와 개수 기준
        PageDTO<UsedItemVO> pageDTO = new PageDTO<>(totalCount, searchDTO.getPage(), searchDTO.getPageSize());

        // 데이터 조회
        List<UsedItemVO> items = usedItemMapper.findAllUsedItem(searchDTO);

        // PageDTO에 데이터 추가
        pageDTO.setItems(items);
        return pageDTO;
    }

}
