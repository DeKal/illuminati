package com.dawn.jat.illuminati.login.security;

import org.springframework.security.core.GrantedAuthority;

public abstract class UserAuthority implements GrantedAuthority {
    public enum Roles {
        ADMIN("admin"), USER("user");
        private String role;

        Roles(String role) {
            this.role = role;
        }

        @Override
        public String toString() {
            return role;
        }
    }
}
