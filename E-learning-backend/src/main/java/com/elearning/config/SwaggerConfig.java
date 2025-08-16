package com.elearning.config;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SwaggerConfig {
	// for swagger UI use --> http://localhost:8080/swagger-ui/index.html
	
    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
            .info(new Info().title("E-Learning API")
            .version("1.0")
            .description("Documentation for E-Learning backend with JWT authentication"))
            .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
            .components(new Components()
                .addSecuritySchemes("bearerAuth",
                    new SecurityScheme()
                        .name("Authorization")
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .bearerFormat("JWT")));
    }
}