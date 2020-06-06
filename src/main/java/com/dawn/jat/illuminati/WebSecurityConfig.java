package com.dawn.jat.illuminati;

import com.dawn.jat.illuminati.login.provider.UserAuthenticationProvider;
import lombok.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Generated
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserAuthenticationProvider authProvider;

    /**
     * TODO: We should turn CSRF on to prevent some Security Breach
     * ISSUE: https://github.com/DeKal/illuminati/issues/209
     */
    @Value("${security.enable-csrf}")
    private boolean csrfEnabled;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        if (!csrfEnabled) {
            http.csrf().disable();
        }
        http.authorizeRequests()
                .antMatchers("/login", "/login/**").permitAll()
                .antMatchers("/api/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("/cms", true)
                .permitAll()
                .and()
                .logout()
                .deleteCookies("JSESSIONID")
                .permitAll();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authProvider);
    }

}
