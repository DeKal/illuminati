package com.dawn.jat.illuminati.core.security;

import com.dawn.jat.illuminati.login.entity.User;
import com.dawn.jat.illuminati.login.service.LoginService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

@Component
public class UserAuthenticationProvider implements AuthenticationProvider {
    @Autowired
    private LoginService loginService;


    @Override
    public Authentication authenticate(Authentication authentication)
            throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();

        User user = loginService.login(username, password);
        if (user != null) {
            List<UserAuthority> authorities = getAuthority(user.getRole());
            return new UsernamePasswordAuthenticationToken(
                    user.getUsername(), user.getPassword(), authorities);
        }

        return null;
    }

    private List<UserAuthority> getAuthority(String role) {
        if (UserAuthority.Roles.ADMIN.toString().equals(role)) {
            return new ArrayList<>(Collections.singletonList(new AdminAuthority()));
        } else if (UserAuthority.Roles.USER.toString().equals(role)) {
            return new ArrayList<>(Collections.singletonList(new NormalAuthority()));
        }
        return new ArrayList<>();
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
