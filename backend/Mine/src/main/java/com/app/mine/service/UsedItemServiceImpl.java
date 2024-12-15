package com.app.mine.service;

import com.app.mine.dto.SearchDTO;
import com.app.mine.mapper.UsedItemMapper;
import com.app.mine.vo.UsedItemVO;
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
        searchDTO.setOrderBy("recent");
        List<UsedItemVO> recentUsedItem = usedItemMapper.findAllUsedItem(searchDTO);

        // 기본 상품
        searchDTO.setOrderBy("default");
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


}
