package com.app.mine.scheduled;

import com.app.mine.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class DeleteUserScheduler {

    private final UserService userService;

    @Value("${user.keep.date}")
    private Integer userKeepDate;

    @Scheduled(cron = "${set.cron.time}")
    public void deleteUser() {
        userService.deleteUser(userKeepDate);
    }
}
