package com.app.mine.service;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.vo.UsedItemVO;
import java.util.List;
import java.util.Map;

public interface UsedItemService {

    public void saveUsedItem(UsedItemVO usedItemVO);

    public List<Map<String, Object>> getAllUsedItems();

    public PageDTO<UsedItemVO> getFilteredUsedItems(SearchDTO searchDTO);
}
