package com.dawn.jat.illuminati.login.security;

import lombok.Generated;

@Generated
public class NormalAuthority extends UserAuthority {
    @Override
    public String getAuthority() {
        return Roles.USER.toString();
    }
}
