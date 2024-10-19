package com.app.mine.config;

import com.app.mine.interceptor.LoginCheckInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

@Component
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginCheckInterceptor())
                .order(1)
                .addPathPatterns("/registration", "/modify");
    }

    /* jsonView */
    @Bean(name="jsonView")
    public MappingJackson2JsonView jsonView() {
        return new MappingJackson2JsonView();
    }
}
