package com.app.mine.service;

import com.app.mine.vo.UsedItemVO;
import java.util.List;
public interface UsedItemService {

    public void saveUsedItem(UsedItemVO usedItemVO);

    public List<UsedItemVO> getAllUsedItems();
}
