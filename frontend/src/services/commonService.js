

export const titleCheck = (type) => {
    console.log("type ::: ", type)
    const recommendTile = ["당신을 위한 추천 경매!", "방금 등록된 상품! ", "실시간 인기상품!"]
    if(type == "recommend"){
      return recommendTile[0]
    }else if(type == "recent"){
      return recommendTile[1]
    }else{
      return recommendTile[2]
    }
  }


