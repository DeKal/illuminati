package com.dawn.jat.illuminati.core.security;


public class AdminAuthority extends UserAuthority {
    @Override
    public String getAuthority() {
        return Roles.ADMIN.toString();
    }
}
