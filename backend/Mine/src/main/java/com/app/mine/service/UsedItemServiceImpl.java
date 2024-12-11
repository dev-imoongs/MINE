package com.app.mine.service;

import com.app.mine.mapper.UsedItemMapper;
import com.app.mine.vo.UsedItemVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;

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
    public List<UsedItemVO> getAllUsedItems() {
        return usedItemMapper.findAll();
    }


}
