package com.dawn.jat.illuminati.login.repository;

import com.dawn.jat.illuminati.login.entity.User;
import java.util.List;
import java.util.Optional;
import lombok.Generated;
import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Generated
@Repository
public interface LoginRepository extends MongoRepository<User, String> {
    @Override
    <S extends User> Optional<S> findOne(Example<S> example);

    @Override
    List<User> findAll();
}
