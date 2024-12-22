package com.app.mine.mapper;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.vo.UsedItemVO;
import com.app.mine.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface UsedItemMapper {

    public void insertUsedItem(UsedItemVO usedItemVO);

    public void updateUsedItem(UsedItemVO usedItemVO);

    public List<UsedItemVO> selectAllUsedItem(@Param("page") PageDTO pageDTO);

    public List<UsedItemVO> getMyUsedItemList(UserVO userVO);

    public int getUsedItemCount(@Param("page") SearchDTO searchDTO);

//    채팅 수 나중에 추가 해야함
    public List<UsedItemVO> selectUsedItemByCondition(@Param("page") SearchDTO searchDTO);

    public Map<String, Object> selectItemStatisticsByCondition(@Param("page") SearchDTO searchDTO);
}
