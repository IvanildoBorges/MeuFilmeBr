package com.devsperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsperior.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
}
