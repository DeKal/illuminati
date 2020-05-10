package com.dawn.jat.illuminati.login.security;

import lombok.Generated;

@Generated
public class AdminAuthority extends UserAuthority {
    @Override
    public String getAuthority() {
        return Roles.ADMIN.toString();
    }
}
