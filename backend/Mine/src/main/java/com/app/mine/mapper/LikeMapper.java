package com.app.mine.mapper;

import com.app.mine.vo.LikeVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface LikeMapper {

    // 중고, 경매 아이템 좋아요 추가
    public void insertLikeForItem(Integer userId, Integer usedItemId, Integer auctionItemId);

    // 중고 아이템 좋아요 여부 확인
    public Optional<LikeVO> findByUserIdAndItemId(Integer userId, Integer usedItemId, Integer auctionItemId);

    // 중고 아이템 좋아요 삭제
    public void deleteByUserIdAndItemId(Integer userId, Integer usedItemId, Integer auctionItemId);

}
