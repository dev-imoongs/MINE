package com.app.mine.service;

import com.app.mine.vo.AuctionItemVO;
import com.app.mine.mapper.AuctionItemMapper;

//AuctionItemServiceImpl.java
@Service
@RequiredArgsConstructor
@Slf4j
public class AuctionItemServiceImpl implements AuctionItemService {

    private final AuctionItemMapper auctionItemMapper;

    @Override
    public AuctionItemVO getAuctionItemById(int id) {
        return auctionItemMapper.findAuctionItemById(id);
    }

    @Override
    public List<AuctionItemVO> getAllAuctionItems() {
        return auctionItemMapper.findAllAuctionItems();
    }


}