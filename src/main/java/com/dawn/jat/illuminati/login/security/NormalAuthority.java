package com.dawn.jat.illuminati.login.security;

public class NormalAuthority extends UserAuthority {
    @Override
    public String getAuthority() {
        return Roles.USER.toString();
    }
}
