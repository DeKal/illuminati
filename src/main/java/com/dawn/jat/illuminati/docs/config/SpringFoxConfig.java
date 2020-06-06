package com.dawn.jat.illuminati.docs.config;

import com.dawn.jat.illuminati.docs.entity.InternalServerResponse;
import com.fasterxml.classmate.TypeResolver;
import com.google.common.collect.Lists;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseMessageBuilder;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ResponseMessage;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

@Generated
@Configuration
@EnableSwagger2
public class SpringFoxConfig {
    @Autowired
    private TypeResolver typeResolver;

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.ant("/api/**"))
                .build()
                .useDefaultResponseMessages(false)
                .additionalModels(typeResolver.resolve(InternalServerResponse.class))
                .globalResponseMessage(RequestMethod.GET, getResponseErrorMessage())
                .globalResponseMessage(RequestMethod.POST, getResponseErrorMessage());
    }

    private List<ResponseMessage> getResponseErrorMessage() {
        return Lists.newArrayList(
                new ResponseMessageBuilder()
                        .code(500)
                        .message("500 message")
                        .responseModel(new ModelRef("InternalServerResponse"))
                        .build());
    }

}
