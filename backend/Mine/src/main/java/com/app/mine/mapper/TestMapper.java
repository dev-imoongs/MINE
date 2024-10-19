package com.app.mine.mapper;

import com.app.mine.vo.TestVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TestMapper {

    public List<TestVO> test();
}
