package com.dawn.jat.illuminati.login.entity;

import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Generated
@NoArgsConstructor
@RequiredArgsConstructor
@Data
@Document(collection = "users")
public class User {
    @Id
    private String id;
    @NonNull
    private String username;
    @NonNull
    private String password;
    @NonNull
    private String role;
}
