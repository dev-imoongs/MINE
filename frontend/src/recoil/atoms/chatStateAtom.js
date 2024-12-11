import { atom } from "recoil"

export const chatDrawerState = atom({
    key: 'chatDrawerState',  
    default: false,  
  });

  export const currentChatId = atom({
    key: 'currentChatId',
    default: null,
  })
  export const sendMessage = atom({
    key: 'sendMessage',
    default: {
      message : "text",
      type: "send",
      text: "",
      time: new Date(),
      userId: "2",
      sender : '1',
      receiver : '2',
      itemId : '1',
      messageForFirstDate: false,
      image:[]
    },
  })

  export const textMessageArray = atom ({
    key: 'textMessageArray',
    default: [
        {
            "message" : "text",
            "type": "send",
            "text": "안녕하세요!",
            "time": "2024-05-16 09:10:01",
            "userId": "1",
            "messageForFirstDate": true
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "안녕하세요! 잘 지내세요?",
            "time": "2024-05-16 09:11:45",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "네, 잘 지내요. 오늘 계획 있으신가요?",
            "time": "2024-05-16 09:12:30",
            "userId": "1",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "아직은 특별한 계획이 없어요. 당신은요?",
            "time": "2024-05-16 09:13:12",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "저도 비슷해요. 그럼 잠시 후에 커피 한 잔 할까요?",
            "time": "2024-05-16 09:14:00",
            "userId": "1",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "좋아요! 언제 만날까요?",
            "time": "2024-05-16 09:14:45",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "한 10시쯤 괜찮으세요?",
            "time": "2024-05-16 09:15:30",
            "userId": "1",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "네, 10시에 봬요.",
            "time": "2024-05-16 09:16:15",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "알겠습니다!",
            "time": "2024-05-16 09:17:00",
            "userId": "1",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "곧 뵙겠습니다.",
            "time": "2024-05-16 09:17:30",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "안녕하세요! 커피 맛있게 드셨나요?",
            "time": "2024-05-17 09:05:20",
            "userId": "1",
            "messageForFirstDate": true
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "네, 아주 맛있었어요! 당신은요?",
            "time": "2024-05-17 09:06:45",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "저도요! 덕분에 좋은 시간이었어요.",
            "time": "2024-05-17 09:07:30",
            "userId": "1",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "저도 즐거웠어요. 또 만나요!",
            "time": "2024-05-17 09:08:45",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "물론이죠! 그럼 내일 또 얘기해요.",
            "time": "2024-05-17 09:09:30",
            "userId": "1",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "좋아요, 내일 봐요!",
            "time": "2024-05-17 09:10:45",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "안녕하세요! 오늘 하루 잘 보내고 계신가요?",
            "time": "2024-05-18 10:20:10",
            "userId": "1",
            "messageForFirstDate": true
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "안녕하세요! 네, 잘 보내고 있어요. 당신은요?",
            "time": "2024-05-18 10:21:35",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "저도 잘 보내고 있어요. 오늘은 무슨 계획이 있나요?",
            "time": "2024-05-18 10:22:15",
            "userId": "1",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "오늘은 가족과 시간을 보낼 예정이에요.",
            "time": "2024-05-18 10:23:45",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "send",
            "text": "좋은 시간 보내세요! 나중에 또 연락드릴게요.",
            "time": "2024-05-18 10:24:30",
            "userId": "1",
            "messageForFirstDate": false
        },
        {
            "message" : "text",
            "type": "receive",
            "text": "네, 감사합니다. 나중에 봬요!",
            "time": "2024-05-18 18:25:45",
            "userId": "2",
            "messageForFirstDate": false
        },
        {
            "message" : "image",
            "type": "receive",
            "time": "2024-07-18 19:25:45",
            "userId": "2",
            "messageForFirstDate": true,
            "image" : [
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                }
            ]
        },
        {
            "message" : "image",
            "type": "send",
            "time": "2024-08-18 19:25:45",
            "userId": "1",
            "messageForFirstDate": false,
            "image" : [
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
            ]
        },
        {
            "message" : "image",
            "type": "send",
            "time": "2024-08-18 20:25:45",
            "userId": "1",
            "messageForFirstDate": false,
            "image" : [
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
            ]
        },
        {
            "message" : "image",
            "type": "receive",
            "time": "2024-08-18 20:25:45",
            "userId": "1",
            "messageForFirstDate": false,
            "image" : [
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
                {
                    'url' : "https://chat-media.joongna.com/2024/09/26/1727315840330zqk_pazd1.jpeg",
                    'width': 1000,
                    'height': 667
                },
            ]
        }
    ]
  })