package com.dawn.jat.illuminati.login.security;

import lombok.Generated;
import org.springframework.security.core.GrantedAuthority;

@Generated
abstract class UserAuthority implements GrantedAuthority {
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

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof UserAuthority)) {
            return false;
        }
        UserAuthority other = (UserAuthority) obj;
        return getAuthority().equals(other.getAuthority());
    }
}
