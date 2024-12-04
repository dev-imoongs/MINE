package com.app.mine.controller;

@RestController
@RequestMapping("/auction-items/*")
public class AuctionItemController {

    private final AuctionItemService auctionItemService;

    @GetMapping("/{id}")
    public ResponseEntity<AuctionItemVO> getAuctionItem(@PathVariable int id) {
        AuctionItemVO item = auctionItemService.getAuctionItemById(id);
        return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
    }

    @GetMapping
    public ResponseEntity<List<AuctionItemVO>> getAllAuctionItems() {
        List<AuctionItemVO> items = auctionItemService.getAllAuctionItems();
        return ResponseEntity.ok(items);
    }
}
