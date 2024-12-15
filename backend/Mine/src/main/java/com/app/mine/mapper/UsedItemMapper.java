package com.app.mine.mapper;

import com.app.mine.dto.SearchDTO;
import com.app.mine.vo.UsedItemVO;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface UsedItemMapper {

    public void insertUsedItem(UsedItemVO usedItemVO);

    public void updateUsedItem(UsedItemVO usedItemVO);

    public List<UsedItemVO> findAllUsedItem(SearchDTO searchDTO);

    public int getUsedItemCount(SearchDTO searchDTO);

}
