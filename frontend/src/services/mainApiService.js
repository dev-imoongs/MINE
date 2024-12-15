import axios from 'axios';

export const mainProducts = async () => {
    try {
        const res = await axios.get('/api/main/getItem')
        console.log(res.data)
        // 임시 데이터 가공
        // let type = ['recommend', 'recent', 'popular']
        // let transformData = []
        // for(let i = 0; i<3; i++){
        //     let dataList = res.data.map(item => ({
        //         id : item.usedItem,
        //         title : item.usedItemName,
        //         price : item.usedItemPrice,
        //         img : 'src/assets/temp_product.png',
        //         address : item.usedItemPlace
        //     }))
        //     let form = {type : type[i], data : dataList}
            
        //     transformData.push(form)
        // }
        
        // console.log('transformData ' , transformData)
        // let data = [res.data.recentUsedItems, res.data.defaultUsedItems, res.data.recommendAuctionItems]
        // console.log('data ', data)
        return res.data;
        
    } catch (error) {
        const response = await axios.get('/data/mainPageData.json')
        return response.data;
        
    }
}