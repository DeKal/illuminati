package com.dawn.jat.illuminati.login.security;


public class AdminAuthority extends UserAuthority {
    @Override
    public String getAuthority() {
        return Roles.ADMIN.toString();
    }
}
