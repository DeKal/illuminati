package com.dawn.jat.illuminati.core.security;

public class NormalAuthority extends UserAuthority {
    @Override
    public String getAuthority() {
        return Roles.USER.toString();
    }
}
