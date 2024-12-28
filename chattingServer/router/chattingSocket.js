const socketIo = require('socket.io');
// const redisClient = require('../service/redisClient');
const dbService = require('../service/postgresService');

const chattingSocket = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true
        }
    });
    const chatNamespace = io.of('/chat'); // '/chat' 네임스페이스 생성

    chatNamespace.on('connection', (chatSocket) => {
        const { chattingroom, sender, receiver } = chatSocket.handshake.headers;

        console.log(`새로운 클라이언트 연결: ${chatSocket.id}`);
        console.log(`채팅방 ID: ${chattingroom}, 발신자: ${sender}, 수신자: ${receiver}`);

        // 클라이언트를 해당 채팅방(room)에 조인
        chatSocket.join(chattingroom);
        console.log(`${chatSocket.id} 채팅방 ${chattingroom}에 참여`);

        // 방에 새로 들어왔을 때 읽지 않은 메시지를 읽음 처리
        chatSocket.on('joinRoom', async ({ userId, roomId }) => {
            console.log(`사용자 ${userId}가 방 ${roomId}에 입장`);
            try {
                // `tbl_chatting_read`와 `tbl_chatting`을 조인하여 room_id를 기준으로 읽지 않은 메시지 가져오기
                const unreadQuery = `
                    SELECT r.chatting_id
                    FROM tbl_chatting_read r
                             INNER JOIN tbl_chatting c ON r.chatting_id = c.chatting_id
                    WHERE c.room_id = $1 AND r.user_id = $2 AND r.chatting_read_status = FALSE;
                `;
                const unreadResult = await dbService.pool.query(unreadQuery, [roomId, userId]);
                const unreadMessageIds = unreadResult.rows.map(row => row.chatting_id);

                // 읽음 처리
                if (unreadMessageIds.length > 0) {
                    const updateQuery = `
                        UPDATE tbl_chatting_read
                        SET chatting_read_status = TRUE, updated_at = NOW()
                        WHERE chatting_id = ANY($1) AND user_id = $2;
                    `;
                    const test2 = await dbService.pool.query(updateQuery, [unreadMessageIds, userId]);
                    console.log(test2)

                    console.log(unreadMessageIds)
                    console.log(userId)
                    // 읽음 상태 업데이트 브로드캐스트
                    chatNamespace.to(chattingroom).emit('read', {
                        chatting_ids: unreadMessageIds,
                        reader_id: userId
                    });
                    console.log('읽음 상태 업데이트 완료:', unreadMessageIds);
                }
            } catch (error) {
                console.error('읽음 처리 실패:', error);
            }
        });

        // 메시지 수신
        chatSocket.on('message', async (message) => {
            console.log(`메시지 받음: ${JSON.stringify(message)}`);

            try {
                let roomClients = chatNamespace.adapter.rooms.get(chattingroom) || new Set();

                // 상대방이 방에 접속해 있는지 확인
                let isReceiverConnected = Array.from(roomClients).some((clientId) => {
                    let clientSocket = chatNamespace.sockets.get(clientId);
                    return clientSocket && clientSocket.handshake.headers.sender === String(message.receiver);
                });
                console.log(isReceiverConnected);

                // 메시지 저장
                const savedChat = await dbService.insertChatting({
                    chatting_sending_user_id: message.sender,
                    chatting_receive_user_id: message.receiver,
                    item_id: message.itemId,
                    chatting_content: message.text,
                    room_id: chattingroom,
                    is_deleted: false
                });

                // console.log("메시지 저장 완료:", savedChat);

                // 읽음 상태 업데이트: 상대방이 방에 들어와 있거나 메시지가 수신자에게 도착한 경우
                if (isReceiverConnected || String(message.receiver) === String(sender)) {
                    console.log('읽음 상태 업데이트 진행');
                    const readQuery = `
                        UPDATE tbl_chatting_read
                        SET chatting_read_status = TRUE, updated_at = NOW()
                        WHERE chatting_id = $1 AND user_id = $2;
                    `;
                    await dbService.pool.query(readQuery, [savedChat.chatting_id, message.receiver]);
                    console.log('읽음 상태 업데이트 완료');
                }

                // 동일한 채팅방(room)에 있는 클라이언트에게 메시지 전달
                chatNamespace.to(chattingroom).emit('message', {
                    ...message,
                    chatting_id: savedChat.chatting_id,
                    read: isReceiverConnected
                });

            } catch (error) {
                console.error('메시지 저장 실패:', error);
            }
        });

        // 연결 해제 처리
        chatSocket.on('disconnect', (reason) => {
            console.log(`클라이언트 연결 해제: ${chatSocket.id}, 이유: ${reason}`);
        });

        chatSocket.on('error', (err) => {
            console.error('소켓 에러 발생:', err);
        });
    });
};

module.exports = chattingSocket;