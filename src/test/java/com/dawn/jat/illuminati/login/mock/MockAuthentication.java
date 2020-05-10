package com.dawn.jat.illuminati.login.mock;

import java.util.Collection;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

public class MockAuthentication implements Authentication {
    private String mockCredential;
    private String mockName;
    private boolean mockIsAuthenticated;

    public MockAuthentication(boolean mockIsAuthenticated) {
        this.mockIsAuthenticated = mockIsAuthenticated;
    }

    public MockAuthentication(String mockName, String mockCredential) {
        this.mockName = mockName;
        this.mockCredential = mockCredential;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public Object getCredentials() {
        return mockCredential;
    }

    @Override
    public Object getDetails() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return null;
    }

    @Override
    public boolean isAuthenticated() {
        return mockIsAuthenticated;
    }

    @Override
    public void setAuthenticated(boolean isAuthenticated) throws IllegalArgumentException {
    }

    @Override
    public String getName() {
        return mockName;
    }
}
