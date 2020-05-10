package com.dawn.jat.illuminati.login.security;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.dawn.jat.illuminati.login.entity.User;
import com.dawn.jat.illuminati.login.mock.MockAuthentication;
import com.dawn.jat.illuminati.login.service.LoginService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;


@ExtendWith(MockitoExtension.class)
@SpringBootTest
@ComponentScan("com.dawn.jat.illuminati.login")
class UserAuthenticationProviderTest {
    @Mock
    LoginService loginService;
    @InjectMocks
    UserAuthenticationProvider userAuthenticationProvider;

    @Test
    void testGetAuthority_RoleAdmin_ReturnAdminAuthority() {
        List<UserAuthority> expectedAuthorities = new ArrayList<>(
                Collections.singletonList(new AdminAuthority())
        );
        List<UserAuthority> actualAuthorities = userAuthenticationProvider.getAuthority("admin");
        assertThat(actualAuthorities, is(expectedAuthorities));
    }

    @Test
    void testGetAuthority_RoleUser_ReturnNormalAuthority() {
        List<UserAuthority> expectedAuthorities = new ArrayList<>(
                Collections.singletonList(new NormalAuthority())
        );
        List<UserAuthority> actualAuthorities = userAuthenticationProvider.getAuthority("user");
        assertThat(actualAuthorities, is(expectedAuthorities));
    }

    @Test
    void testGetAuthority_RoleUnknown_ReturnNormalAuthority() {
        List<UserAuthority> actualAuthorities = userAuthenticationProvider.getAuthority("unknown");
        assertTrue(actualAuthorities.isEmpty());
    }

    @Test
    void testAuthenticate_WithWrongAuth_ReturnNull() {
        Mockito.when(loginService.login("user", "password")).thenReturn(null);
        Authentication authentication = new MockAuthentication("user", "password");
        Authentication userAuth = userAuthenticationProvider.authenticate(authentication);
        assertNull(userAuth);
    }

    @Test
    void testAuthenticate_WithAdminAuth_ReturnAdminAuthentication() {
        List<UserAuthority> expectedAuthorities = new ArrayList<>(
                Collections.singletonList(new AdminAuthority())
        );
        Authentication expected = new UsernamePasswordAuthenticationToken(
                "admin", "password", expectedAuthorities);

        User user = new User("admin", "password", "admin");
        Mockito.when(loginService.login("admin", "password")).thenReturn(user);

        Authentication authentication = new MockAuthentication("admin", "password");
        Authentication userAuth = userAuthenticationProvider.authenticate(authentication);
        assertEquals(expected, userAuth);
    }

    @Test
    void testSupports_WithMockAuth_NotSupport() {
        assertFalse(userAuthenticationProvider.supports(MockAuthentication.class));
    }

    @Test
    void testSupports_WithUsernamePasswordAuth_Support() {
        assertTrue(userAuthenticationProvider.supports(UsernamePasswordAuthenticationToken.class));
    }
}