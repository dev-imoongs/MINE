package com.app.mine.mapper;

import com.app.mine.dto.PageDTO;
import com.app.mine.dto.SearchDTO;
import com.app.mine.vo.UsedItemVO;
import com.app.mine.vo.UserVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UsedItemMapper {

    public void insertUsedItem(UsedItemVO usedItemVO);

    public void updateUsedItem(UsedItemVO usedItemVO);

    public List<UsedItemVO> findAllUsedItem(@Param("page") PageDTO pageDTO);

    public List<UsedItemVO> getMyUsedItemList(UserVO userVO);

    public int getUsedItemCount(@Param("page") SearchDTO searchDTO);

}
