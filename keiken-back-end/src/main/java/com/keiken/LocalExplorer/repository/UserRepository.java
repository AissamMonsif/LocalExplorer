package com.keiken.LocalExplorer.repository;

import com.keiken.LocalExplorer.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
