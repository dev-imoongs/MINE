package com.app.mine.mapper;

import com.app.mine.vo.CategoryVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {

    public List<CategoryVO> selectCategory();
}
