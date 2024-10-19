package com.app.mine.service;

import com.app.mine.vo.TestVO;
import com.app.mine.mapper.TestMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TestServiceImpl implements TestService {

    private final TestMapper testMapper;

    @Override
    public List<TestVO> test() {
        return testMapper.test();
    }
}
