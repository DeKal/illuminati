package com.dawn.jat.illuminati.login.service;

import com.dawn.jat.illuminati.login.entity.User;
import com.dawn.jat.illuminati.login.repository.LoginRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LoginService {
    @Autowired
    LoginRepository repository;

    private ExampleMatcher getLoginMatcher() {
        return ExampleMatcher.matching()
                .withIgnorePaths("_class")
                .withMatcher("username", new ExampleMatcher.GenericPropertyMatcher().exact())
                .withMatcher("password", new ExampleMatcher.GenericPropertyMatcher().exact());
    }


    /**
     * Login check login information of user against DB.
     */
    public User login(String username, String password) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        ExampleMatcher loginMatcher = getLoginMatcher();
        Example<User> userExample = Example.of(user, loginMatcher);
        Optional<User> userWrap = repository.findOne(userExample);
        return userWrap.orElse(null);
    }

}
