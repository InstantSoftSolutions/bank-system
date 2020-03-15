package com.bankServerApi.repository;

import org.springframework.stereotype.Repository;

import com.bankServerApi.entity.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findByEmail(String email);
	
	Boolean existsByEmail(String email);
}
