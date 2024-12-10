package com.app.mine.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FileVO {
    private Integer fileUuid;
    private String fileName;
    private String filePath;
    private String fileType;
    private Integer fileSize;
    private Integer usedItemId;
    private Integer auctionItemId;
}
