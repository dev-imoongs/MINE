package com.app.mine.service;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.vo.Criteria;
import com.app.mine.vo.UsedItemVO;
import com.app.mine.vo.UserVO;

import java.util.List;
import java.util.Map;

public interface UsedItemService {

    public void saveUsedItem(UsedItemVO usedItemVO);

    // 메인페이지 조회
    public List<Map<String, Object>> findAllUsedItems();

    // 메인페이지 -> 바로가기 (무한스크롤)
    public Map<String, Object> getFilteredUsedItems(SearchDTO searchDTO, Criteria criteria);

    // 카테고리 페이지
    public Map<String, Object> findSearchUsedItem(SearchDTO searchDTO);

    public List<UsedItemVO> getMyUsedItemList(UserVO userVO);
}
